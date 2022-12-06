import Layout from '../../components/layout/Layout'
import PlayGame from '../../components/playgame/PlayGame'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PlayGamePage() {
    const { data, error } = useSWR('/api/staticdata', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    const games = JSON.parse(data)

    return (
        <Layout pageTitle="Play/Games">
            <div className="container">
                <h1 className="title">Play / Game</h1>
                {<PlayGame games={games['play-game']} />}
            </div>
        </Layout>
    )
}
