import { fetchData } from '../../lib/FetchData'
import DoMake from '../../components/domake/DoMake'
import Layout from '../../components/layout/Layout'

export async function getStaticPaths() {
    const doMakes = await fetchData('do-make')

    const paths = doMakes.map((domake) => ({
        params: { title: domake.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const domake = await fetchData(`do-make/?id=${params.title}`)
    return { props: { domake } }
}

export default function SingleDoMake({ domake }) {
    return (
        <Layout pageTitle="Do/Make">
            <DoMake domake={domake[0]} />
        </Layout>
    )
}
