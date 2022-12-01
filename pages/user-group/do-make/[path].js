// import { useRouter } from 'next/router'
import SingleDoMake from '../../../components/DoMakeGrid'
import Layout from '../../../components/Layout'

// import { useContext } from 'react'
// import GlobalUserGroup from '../../../lib/GlobalContext'

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3003/do-make')
    const doMakes = await res.json()
    // mapping both age groups
    const ageGroupsKeys = Object.keys(doMakes)
    // ["under13", "over13"]

    // const paths = ageGroupsKeys.forEach((ageGroupKey) =>
    //     doMakes[ageGroupKey].map((doMake) => ({
    //         params: { path: doMake.path },
    //     }))
    // )
    const paths = ageGroupsKeys.forEach((ageGroupKey) =>
        doMakes[ageGroupKey].map((doMake) => {
            return doMake
        })
    )

    // console.log(paths)
    // for (var key in doMakes) {
    //     if (doMakes.hasOwnProperty(key)) {
    //         const paths = doMakes[key].map((doMake) => ({
    //             params: { path: doMake.path },
    //         }))
    //         return paths
    //     }
    //     return paths
    // }
    // const paths = doMakes.map(function (nested) {
    //     return nested.map((doMake) => ({
    //         params: { path: doMake.path },
    //     }))
    // })

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/do-make')
    const doMakes = await res.json()
    return { props: { doMakes } }
}
export default function DoMake({ doMakes }) {
    // const router = useRouter()
    // const { path } = router.query
    console.log(doMakes)
    return (
        <Layout pageTitle="Do/Make">
            {/* <SingleDoMake doMakes={doMakes} /> */}
        </Layout>
    )
}
