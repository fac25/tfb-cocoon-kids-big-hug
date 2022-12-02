import SingleEmotion from '../../../components/emotions/Emotion'
import { fetchData } from '../../../components/FetchData'

import Layout from '../../../components/layout/Layout'
import ChatSpeak from '../../../components/ChatSpeak'

export async function getStaticPaths() {
    const emotions = await fetchData('emotions')

    const paths = emotions.map((emotion) => ({
        params: { name: emotion.name },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const name = context.params.name

    const emotion = await fetchData('emotions/?name=' + name)
    const chat = await fetchData('chat-speak')

    return { props: { emotion, chat } }
}

export default function Emotion({ emotion, chat }) {
    return (
        <Layout pageTitle="Emotion">
            <SingleEmotion emotion={emotion} />
            <section>
                <h3>Do/Make</h3>
                Grid of do/makes component
                <h3>Play/Game</h3>
                Grid of Play/Game component
                <h3>Join/Go</h3>
                Grid of Join/Go component
                <h3>Chat/Speak</h3>
                <ChatSpeak chat={chat} />
            </section>
        </Layout>
    )
}
