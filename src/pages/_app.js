import '../styles/globals.css'
import { useState, useEffect } from 'react'
import GlobalUserGroup from '../context/GlobalContext'


function MyApp({ Component, pageProps }) {
    const initialState = 'under13'
    const [userGroup, setUserGroup] = useState(initialState)

    useEffect(() => {
        const ageGroup = localStorage.getItem('user-group')
        if (ageGroup) {
            setUserGroup(ageGroup)
        } else {
            setUserGroup(localStorage.setItem('user-group', 'under13'))
        }
    }, [userGroup])

    return (
        <GlobalUserGroup.Provider value={{ userGroup, setUserGroup }}>
            <Component {...pageProps} />
        </GlobalUserGroup.Provider>
    )
}

export default MyApp
