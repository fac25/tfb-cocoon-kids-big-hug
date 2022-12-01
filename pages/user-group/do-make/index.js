import DoMakeGrid from '../../../components/DoMakeGrid'
import Layout from '../../../components/Layout'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/do-make')
    const doMakes = await res.json()

    return { props: { doMakes } }
}

export default function DoMakePage({ doMakes }) {
    return (
        <Layout pageTitle="Do/Make">
            <DoMakeGrid doMakes={doMakes} />
        </Layout>
    )
}
