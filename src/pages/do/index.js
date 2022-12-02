import { fetchData } from '../../components/FetchData'
import DoMakeGrid from '../../components/domake/DoMakeGrid'
import Layout from '../../components/layout/Layout'

export async function getStaticProps() {
    const doMakes = await fetchData('do-make')

    return { props: { doMakes } }
}

export default function DoMakePage({ doMakes }) {
    return (
        <Layout pageTitle="Do/Make">
            <DoMakeGrid doMakes={doMakes} />
        </Layout>
    )
}
