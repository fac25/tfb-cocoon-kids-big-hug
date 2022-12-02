// import { useRouter } from 'next/router'
import { useContext } from 'react'
import GlobalUserGroup from '../context/GlobalContext'

import Link from 'next/link'

export default function UserGroupBtn({ userGroup, text }) {
    const { setUserGroup } = useContext(GlobalUserGroup)
    const updateUserGroup = () => {
        setUserGroup(localStorage.setItem('user-group', userGroup))
    }
    return (
        <Link href={'/welcome'} onClick={updateUserGroup}>
            {text}
        </Link>
    )
}
