import { useRouter } from 'next/router'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'

import SingleEmotion from '../../../components/Emotion'

import Layout from '../../../components/Layout'
import ChatSpeak from '../../../components/ChatSpeak'

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3003/emotions')
    const emotions = await res.json()

    const paths = emotions.map((emotion) => ({
        params: { name: emotion.name },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/emotions')
    const res2 = await fetch('http://localhost:3003/chat-speak')
    const emotions = await res.json()
    const chat = await res2.json()

    return { props: { emotions, chat } }
}

export default function Emotion({ emotions, chat }) {
    // console.log(chat)
    const router = useRouter()
    const { name } = router.query
    return (
        <Layout pageTitle="Emotion">
            <SingleEmotion name={name} emotions={emotions} />
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
