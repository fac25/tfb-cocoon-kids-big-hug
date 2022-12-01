import { fetchData } from "../../../components/FetchData"

import { useRouter } from 'next/router'

export async function getStaticPaths() {

    const games = ['under13', 'over13']

    const paths = games.map((game) => ({
        params: { game: game },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const games = await fetchData("play-game")
    return { props: { games } }
}

export default function Emotion({ games }) {
    console.log(games)
    return <div></div>
}
