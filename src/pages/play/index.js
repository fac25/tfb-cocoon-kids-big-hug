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

                <p className="text-center subtitle">
                    These games are called Sensory Regulatory games.
                </p>
                <div className="lead lead--chat ms-md">
                    <p>
                        These games are tested by Scientists. They saw that they
                        make people feel calmer, less anxious and less worried
                        about things. This is because you concentrate as you are
                        doing them.
                    </p>
                    <ul className="list-style">
                        <li>
                            Moving your hands back and forward helps your heart,
                            mind and body to feel more relaxed too.
                        </li>
                        <li>
                            It helps you to breathe in and out more slowly and
                            at the same rhythm and beat (regulate your
                            breathing).
                        </li>
                    </ul>
                </div>
                {<PlayGame games={games['play-game']} />}
            </div>
        </Layout>
    )
}
