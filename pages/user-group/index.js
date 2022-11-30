import Layout from '../../components/Layout'
import Emotions from '../../components/Emotions'
import WhatToDo from '../../components/WhatToDo'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/emotions')
    const emotions = await res.json()

    return { props: { emotions } }
}

export default function UserGroup({ emotions }) {
    return (
        <Layout pageTitle="User Group">
            <Emotions emotions={emotions} length={9} page={true} />
            <WhatToDo></WhatToDo>
        </Layout>
    )
}
