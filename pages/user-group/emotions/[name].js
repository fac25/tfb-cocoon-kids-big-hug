import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../../components/Layout'

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
    return (
        <Layout pageTitle="Emotion">
            {emotions.map((emotion) => {
                if (emotion.name === name) {
                    return (
                        <div>
                            <Image
                                src={`/assets/under13/${emotion.under13.src}`}
                                width={300}
                                height={300}
                            />
                            <p key={emotion.id}>{emotion.name}</p>
                        </div>
                    )
                }
            })}
        </Layout>
    )
}
