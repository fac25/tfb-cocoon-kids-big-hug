import Emotions from '../../../components/Emotions'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3002/emotions')
    const emotions = await res.json()
    return { props: { emotions } }
}

export default function AllEmotions({ emotions }) {
    // console.log(localStorage && localStorage.getItem("user-group"))
    return <Emotions emotions={emotions} length={emotions.length} page={false} />
}
