import Emotions from '../../components/emotions/Emotions'
import Layout from '../../components/layout/Layout'
import Select from 'react-select'
import { useState } from 'react'
import Link from 'next/link'
import { fetchData } from '../../lib/FetchData'

export async function getStaticProps() {
    const emotions = await fetchData('emotions')
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
            <div className="search">
                <Select
                    options={selectOptions}
                    onChange={(opt) => setUserChoice(opt.value)}
                />

                <Link href={userChoice}>SEARCH</Link>
            </div>
            <Emotions emotions={emotions} length={emotions.length} />
            <style>{`
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
