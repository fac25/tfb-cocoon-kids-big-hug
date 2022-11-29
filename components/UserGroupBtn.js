// import { useRouter } from 'next/router'
import { useContext } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

import Link from 'next/link'

export default function UserGroupBtn({ userGroup, text }) {
    // const router = useRouter()
    const { setUserGroup } = useContext(GlobalUserGroup)
    const updateUserGroup = () => {
        setUserGroup(localStorage.setItem('user-group', userGroup))
        // localStorage
        //     ? setUserGroup(localStorage.getItem('user-group'))
        //     : setUserGroup('under13')
    }
    return (
        <Link href={'/user-group'} onClick={updateUserGroup}>
            {text}
        </Link>
    )
}
