import Emotions from '../../../components/Emotions'
import Layout from '../../../components/Layout'
import Select from 'react-select'
import { useState } from 'react'
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/emotions')
    const emotions = await res.json()
    const emotionsArray = emotions.map((el) => el.name)
    console.log(emotionsArray)
    const selectOptions = emotionsArray.map((opt) => ({
        label: opt,
        value: opt,
    }))
    console.log(selectOptions)
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
