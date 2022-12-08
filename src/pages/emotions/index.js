import Emotions from '../../components/emotions/Emotions'
import Layout from '../../components/layout/Layout'
import WhatToDo from '../../components/WhatToDo'
import Select from 'react-select'
import { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function AllEmotions() {
    const [userChoice, setUserChoice] = useState('')
    const { data, error } = useSWR('/api/staticdata', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const json = JSON.parse(data)

    const emotionsArray = json.emotions.map((el) => el.name)
    const selectOptions = emotionsArray.map((opt) => ({
        label: opt,
        value: opt,
    }))

    return (
        <Layout pageTitle="Emotions">
            <div className="search">
                <Select
                    options={selectOptions}
                    onChange={(opt) => setUserChoice(opt.value)}
                />

                <Link href={`emotions/${userChoice}`}>SEARCH</Link>
            </div>
            <Emotions emotions={json.emotions} length={json.emotions.length} />
            <WhatToDo id="what-can-i-do" />
            <style>{`
            #test{
                position: fixed;
            }
            .search{
                width: 14rem;
                margin: auto;
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
            }
            .search a{
                display:inline-block;
                transition-duration: 300ms;
                background-color: var(--black);
                color: var( --yellow-light);
                padding: 0.5rem 1.25rem;
                margin-top:0.5rem;
                border: 2px solid var(--black);
               border-radius:1rem;
               font-size: var(--font-size-sm)
            }
            .search a:hover{
                background-color: var(--yellow-light);
                color: var(--black);
            }
          
      @media screen and (min-width: 768px) {
     .search{
        width: 24rem;
     }
    }
     `}</style>
        </Layout>
    )
}
