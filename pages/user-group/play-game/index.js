
import Layout from "../../../components/Layout"
import PlayGame from "../../../components/PlayGame"

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/play-game')
    const games = await res.json()

    return { props: { games } }
}

export default function PlayGamePage({games}) {
    return (
        <Layout pageTitle="Play/Games">
            <PlayGame games={games} />
        </Layout>
    )
}

