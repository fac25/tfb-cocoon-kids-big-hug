import Emotions from '../../../components/Emotions'
import Layout from '../../../components/Layout'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3002/emotions')
    const emotions = await res.json()
    return { props: { emotions } }
}

export default function AllEmotions({ emotions }) {
    return (
        <Layout pageTitle="Emotions">
            <Emotions
                emotions={emotions}
                length={emotions.length}
                page={false}
            />
        </Layout>
    )
}
