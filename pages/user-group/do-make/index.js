import DoMakeGrid from '../../../components/DoMakeGrid'
import Layout from '../../../components/Layout'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/do-make')
    const doMake = await res.json()

    return { props: { doMake } }
}

export default function UserGroup({ doMake }) {
    return (
        <Layout pageTitle="Do/Make">
            <DoMakeGrid doMake={doMake} />
        </Layout>
    )
}
