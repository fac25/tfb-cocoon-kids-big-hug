import '../styles/globals.css'
import { useState } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

function MyApp({ Component, pageProps }) {
    const [userGroup, setUserGroup] = useState('-13')
    return (
        <GlobalUserGroup.Provider value={{ userGroup, setUserGroup }}>
            <Component {...pageProps} />
        </GlobalUserGroup.Provider>
    )
}

export default MyApp
