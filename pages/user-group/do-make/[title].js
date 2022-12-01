import DoMake from '../../../components/DoMake'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3003/do-make')
    const doMakes = await res.json()
    // mapping both age groups
    const ageGroupsKeys = Object.keys(doMakes)
    // ["under13", "over13"]
    let nestedPaths = []

    ageGroupsKeys.forEach((ageGroupKey) =>
        nestedPaths.push(
            doMakes[ageGroupKey].map((doMake) => {
                const path = `${ageGroupKey}-${doMake.title}`
                return {
                    params: { title: path },
                }
            })
        )
    )
    const paths = nestedPaths.flatMap((el) => el)

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/do-make')
    const doMakes = await res.json()
    return { props: { doMakes } }
}

export default function SingleDoMake({ doMakes }) {
    // get userGroup
    // map usergroup do makes
    // show content
    const router = useRouter()
    const { title } = router.query
    const splitTitle = title.split('-')
    // use the age group to access their domakes
    // get the specific domake for this page filtering the title
    const currentDoMake = doMakes[splitTitle[0]].filter(
        (doMake) => doMake.title === splitTitle[1]
    )

    return (
        <Layout pageTitle="Do/Make">
            <DoMake currentDoMake={currentDoMake[0]} />
        </Layout>
    )
}
