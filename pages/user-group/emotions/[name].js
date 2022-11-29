import { useRouter } from 'next/router'
import Image from 'next/image'

import { useContext } from 'react'
import GlobalUserGroup from '../../../lib/GlobalContext'

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3002/emotions')
    const emotions = await res.json()

    const paths = emotions.map((emotion) => ({
        params: { name: emotion.name },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3002/emotions')
    const emotions = await res.json()

    return { props: { emotions } }
}

export default function Emotion({ emotions }) {
    const router = useRouter()
    const { name } = router.query
    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <div>
            {emotions.map((emotion) => {
                if (emotion.name === name) {
                    return (
                        <div key={emotion.id}>
                            <Image
                                src={`/assets/${userGroup}/${emotion[userGroup].src}`}
                                width={300}
                                height={300}
                                alt={emotion.name}
                            />
                            <p>{emotion.name}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}
