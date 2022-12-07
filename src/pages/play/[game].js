// import { fetchData } from '../../lib/FetchData'
// import SinglePlayGame from '../../components/playgame/SinglePlayGame'
// import Layout from '../../components/layout/Layout'

// export async function getStaticPaths() {
//     const paths = games.map((game) => ({
//         params: { game: game.id.toString() },
//     }))

//     return { paths, fallback: false }
// }

// export async function getStaticProps(context) {
//     const param = context.params.game
//     const game = await fetchData(`play-game/?id=${param}`)
//     return { props: { game } }
// }

// export default function Emotion({ game }) {
//     return (
//         <Layout pageTitle="Game">
//             <SinglePlayGame game={game[0]} />
//         </Layout>
//     )
// }
// import { fetchData } from '../../lib/FetchData'
// import SinglePlayGame from '../../components/playgame/SinglePlayGame'
// import Layout from '../../components/layout/Layout'

// export async function getStaticPaths() {
//     const games = await fetchData('play-game')

//     const paths = games.map((game) => ({
//         params: { game: game.id.toString() },
//     }))

//     return { paths, fallback: false }
// }

// export async function getStaticProps(context) {
//     const param = context.params.game
//     const game = await fetchData(`play-game/?id=${param}`)
//     return { props: { game } }
// }

// export default function Emotion({ game }) {
//     return (
//         <Layout pageTitle="Game">
//             <SinglePlayGame game={game[0]} />
//         </Layout>
//     )
// }

// import { fetchData } from '../../lib/FetchData'
import SinglePlayGame from '../../components/playgame/SinglePlayGame'
import Layout from '../../components/layout/Layout'
import path from 'path'
import { promises as fs } from 'fs'
// export async function getStaticPaths() {
//     const res = await fetch(`/api/staticdata`)
//     const data = await res.json()
//     console.log(data)
//     const paths = data['play-game'].map((game) => ({
//         params: { game: game.id.toString() },
//     }))

//     return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
    const param = context.params.game
    // const res = await fetch(`/api/staticdata`)
    // const data = await res.json()
    // const game = data['play-game'].filter((game) => game.id === param)
    const jsonDirectory = path.join(process.cwd(), 'json')
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/db.json', 'utf8')
    const data = JSON.parse(fileContents)
    const game = data['play-game'].filter((game) => game.id === +param)

    //Return the content of the data file in json format

    return { props: { game } }
}

export default function Emotion({ game }) {
    console.log(game)
    return (
        <Layout pageTitle="Game">
            <SinglePlayGame game={game[0]} />
        </Layout>
    )
}
// import { fetchData } from '../../lib/FetchData'
// import SinglePlayGame from '../../components/playgame/SinglePlayGame'
// import Layout from '../../components/layout/Layout'

// export async function getStaticPaths() {
//     const games = await fetchData('play-game')

//     const paths = games.map((game) => ({
//         params: { game: game.id.toString() },
//     }))

//     return { paths, fallback: false }
// }

// export async function getStaticProps(context) {
//     const param = context.params.game
//     const game = await fetchData(`play-game/?id=${param}`)
//     return { props: { game } }
// }

// export default function Emotion({ game }) {
//     return (
//         <Layout pageTitle="Game">
//             <SinglePlayGame game={game[0]} />
//         </Layout>
//     )
// }
