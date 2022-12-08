import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useRouter } from 'next/router'

import { setCookie } from 'cookies-next'

export default withAuthenticator(function authenticate({ user }) {
    const router = useRouter()

    const handleOnLoad = () => {
        setCookie('user', user.attributes.birthdate)
        router.push('/welcome')
    }

    return <div>{user && <div onLoad={handleOnLoad()}></div>}</div>
})
