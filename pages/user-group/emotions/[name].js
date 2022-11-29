import { useRouter } from 'next/router'
import SingleEmotion from '../../../components/Emotion'

import Layout from '../../../components/Layout'

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3002/emotions')
    const emotions = await res.json()

    const paths = emotions.map((emotion) => ({
        params: { name: emotion.name },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3002/emotions')
    const emotions = await res.json()

    return { props: { emotions } }
}

export default function Emotion({ emotions }) {
    const router = useRouter()
    const { name } = router.query
    return (
        <Layout pageTitle="Emotion">
            <SingleEmotion
                name={name}
                emotions={emotions}
            />
        </Layout>
    )
}
