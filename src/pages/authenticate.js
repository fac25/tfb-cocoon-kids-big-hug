import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { useRouter } from 'next/router'

import { setCookie, getCookie } from 'cookies-next'

export default withAuthenticator(function Authenticate({ user }) {
    const router = useRouter()

    setCookie('user', user.username)

    const path = getCookie('path')

    const handlePath = () => {
        router.push(path)
    }

    return <div>{user && <div onLoad={handlePath()}></div>}</div>
})
