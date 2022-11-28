export async function getStaticProps() {
    const data = await fetch('http://localhost:3002/emotions')
    const emotion = await data.json()
    return { props: { emotion } }
}

export default function Landing({ emotion }) {
    console.log(emotion)
    return <div>Hello</div>
}
