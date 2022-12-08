import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { useRouter } from 'next/router'

import { setCookie } from 'cookies-next'

export default withAuthenticator(function authenticate({ user }) {
    const router = useRouter();

    setCookie('user', user.username)

    return (
        <div>{user && <div onLoad={ router.push('/welcome')}></div>}</div>
    )
})
