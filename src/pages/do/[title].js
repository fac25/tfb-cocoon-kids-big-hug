// import { fetchData } from '../../lib/FetchData'
import DoMake from '../../components/domake/DoMake'
import Layout from '../../components/layout/Layout'
import path from 'path'
import { promises as fs } from 'fs'
// export async function getStaticPaths() {
//     const doMakes = await fetchData('do-make')

//     const paths = doMakes.map((domake) => ({
//         params: { title: domake.title },
//     }))

//     return { paths, fallback: false }
// }

export async function getServerSideProps({ params }) {
    // const domake = await fetchData(`do-make/?title=${params.title}`)

    const jsonDirectory = path.join(process.cwd(), 'json')
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/db.json', 'utf8')
    const data = JSON.parse(fileContents)
    const domake = data['do-make'].filter(
        (domake) => domake.title === params.title
    )
    console.log(domake)
    return { props: { domake } }
}

export default function SingleDoMake({ domake }) {
    return (
        <Layout pageTitle="Do/Make">
            <DoMake domake={domake[0]} />
        </Layout>
    )
}
