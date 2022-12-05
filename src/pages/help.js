import Layout from '../components/layout/Layout'
import ChatSpeak from '../components/ChatSpeak'
import { fetchData } from '../lib/FetchData'

export async function getStaticProps() {
    const chat = await fetchData('chat-speak')

    return { props: { chat } }
}

export default function Help({ chat }) {
    return (
        <Layout pageTitle="Help">
            <ChatSpeak chat={chat} />
        </Layout>
    )
}
