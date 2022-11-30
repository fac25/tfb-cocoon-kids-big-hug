import DoMake from '../../../components/DoMake'
import Layout from '../../../components/Layout'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/do-make')
    const doMake = await res.json()

    return { props: { doMake } }
}

export default function UserGroup({ doMake }) {
    return (
        <Layout pageTitle="Do/Make">
            <DoMake doMake={doMake} />
        </Layout>
    )
}
