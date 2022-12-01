import { fetchData } from '../../../components/FetchData'
import Layout from '../../../components/layout/Layout'
import PlayGame from '../../../components/playgame/PlayGame'

export async function getStaticProps() {
    const games = await fetchData('play-game')

    return { props: { games } }
}

export default function PlayGamePage({ games }) {
    return (
        <Layout pageTitle="Play/Games">
            <PlayGame games={games} />
        </Layout>
    )
}
