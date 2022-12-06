import Layout from '../components/layout/Layout'
import Emotions from '../components/emotions/Emotions'
import WhatToDo from '../components/WhatToDo'
import useSWR from 'swr'

// export async function getStaticProps() {
//     // const emotions = await fetchData('emotions')
//     return { props: { emotions } }
// }

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Welcome() {
    const { data, error } = useSWR('/api/staticdata', fetcher)
    // console.log(data)
    //Handle the error state
    if (error) return <div>Failed to load</div>
    //Handle the loading state
    if (!data) return <div>Loading...</div>
    return (
        <Layout pageTitle="User Group">
            <Emotions emotions={JSON.parse(data)} length={9} />
            <WhatToDo></WhatToDo>
        </Layout>
    )
}
