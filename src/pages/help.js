import Layout from '../components/layout/Layout'
import ChatSpeak from '../components/ChatSpeak'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Help() {
    const { data, error } = useSWR('/api/staticdata', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const chat = JSON.parse(data)
    return (
        <Layout pageTitle="Help">
            {<ChatSpeak chat={chat['chat-speak']} />}
        </Layout>
    )
}
