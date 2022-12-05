// import { Tab } from '@headlessui/react'

import SingleEmotion from '../../components/emotions/Emotion'
import { fetchData } from '../../components/FetchData'

import Layout from '../../components/layout/Layout'
import ChatSpeak from '../../components/ChatSpeak'

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
                {/* <Tab.Group>
                    <Tab.List>
                        <Tab>
                            <h3>Do/Make</h3>
                        </Tab>
                        <Tab>
                            <h3>Play/Game</h3>
                        </Tab>
                        <Tab>
                            <h3>Join/Go</h3>
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>One do/makes</Tab.Panel>
                        <Tab.Panel>One Play/Game</Tab.Panel>
                        <Tab.Panel>One Join/Go</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group> */}

                <h3>Chat/Speak</h3>
                <ChatSpeak chat={chat} />
            </section>
        </Layout>
    )
}
