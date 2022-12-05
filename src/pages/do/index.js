import { fetchData } from '../../lib/FetchData'
import DoMakeGrid from '../../components/domake/DoMakeGrid'
import Layout from '../../components/layout/Layout'

export async function getStaticProps() {
    const doMakes = await fetchData('do-make')

    return { props: { doMakes } }
}

export default function DoMakePage({ doMakes }) {
    return (
        <Layout pageTitle="Do/Make">
            <div className="container">
                <h1 className="title">Do / Make</h1>
                <DoMakeGrid doMakes={doMakes} />
            </div>
        </Layout>
    )
}
