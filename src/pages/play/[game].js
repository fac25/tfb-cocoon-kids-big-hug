import { fetchData } from '../../components/FetchData'
import SinglePlayGame from '../../components/playgame/SinglePlayGame'

export async function getStaticPaths() {
    const games = await fetchData('play-game')

    const paths = games.map((game) => ({
        params: { game: game.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const param = context.params.game
    const game = await fetchData(`play-game/?id=${param}`)
    return { props: { game } }
}

export default function Emotion({ game }) {
    return (
        <div>
            <SinglePlayGame game={game} />
        </div>
    )
}
