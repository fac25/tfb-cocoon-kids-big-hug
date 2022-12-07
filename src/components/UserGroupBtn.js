// import { useRouter } from 'next/router'
import { useContext } from 'react'
import GlobalUserGroup from '../context/GlobalContext'
import Link from 'next/link'

export default function UserGroupBtn({ userGroup, text, route }) {
    const { setUserGroup } = useContext(GlobalUserGroup)
    const updateUserGroup = () => {
        setUserGroup(localStorage.setItem('user-group', userGroup))
    }
    return (
        <Link href={route} onClick={updateUserGroup} className="stretched-link">
            {text}
        </Link>
    )
}
