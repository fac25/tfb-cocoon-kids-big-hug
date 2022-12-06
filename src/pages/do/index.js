import DoMakeGrid from '../../components/domake/DoMakeGrid'
import Layout from '../../components/layout/Layout'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function DoMakePage() {
    const { data, error } = useSWR('/api/staticdata', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const json = JSON.parse(data)

    return (
        <Layout pageTitle="Do/Make">
            <div className="container">
                <h1 className="title">Do / Make</h1>
                <DoMakeGrid doMakes={json['do-make']} />
            </div>
        </Layout>
    )
}
