import Layout from '../components/Layout'
import { useContext } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'
export default function HomePage() {
    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <Layout pageTitle="Home">
            <div>{userGroup}</div>
            {/**
             * if context === +13 fetch api +13 "happy.jpg" // images/13plus/happy.jpg
             *
             */}
        </Layout>
    )
}
