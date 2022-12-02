import Emotions from '../../components/emotions/Emotions'
import Layout from '../../components/layout/Layout'
import Select from 'react-select'
import { useState } from 'react'
import Link from 'next/link'
import { fetchData } from '../../components/FetchData'

export async function getStaticProps() {
    const emotions = await fetchData("emotions")
    const emotionsArray = emotions.map((el) => el.name)
    
    const selectOptions = emotionsArray.map((opt) => ({
        label: opt,
        value: opt,
    }))
    return { props: { emotions, selectOptions } }
}

export default function AllEmotions({ emotions, selectOptions }) {
    const [userChoice, setUserChoice] = useState('')
    return (
        <Layout pageTitle="Emotions">
            <Select
                options={selectOptions}
                onChange={(opt) => setUserChoice(opt.value)}
            />
            <Link href={userChoice}>SEARCH</Link>
            <Emotions
                emotions={emotions}
                length={emotions.length}
                page={false}
            />
        </Layout>
    )
}
