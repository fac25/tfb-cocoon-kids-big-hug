import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'

import SingleEmotion from '../../../components/Emotion'
import { fetchData } from '../../../components/FetchData'

import Layout from '../../../components/Layout'
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
                <Accordion>
                    <AccordionItem>
                        <h3>
                            <AccordionButton>Do/Make</AccordionButton>
                        </h3>
                        <AccordionPanel>
                            Grid of do/makes component
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h3>
                            <AccordionButton>Play/Game</AccordionButton>
                        </h3>
                        <AccordionPanel>
                            Grid of Play/Game component
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h3>
                            <AccordionButton>Join/Go</AccordionButton>
                        </h3>
                        <AccordionPanel>
                            Grid of Join/Go component
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h3>
                            <AccordionButton>Chat/Speak</AccordionButton>
                        </h3>
                        <AccordionPanel>
                            <ChatSpeak chat={chat} />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </section>
        </Layout>
    )
}
