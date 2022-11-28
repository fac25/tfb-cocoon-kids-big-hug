import { useRouter } from 'next/router'
import { useContext } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

export default function UserGroupBtn({ userGroup, text }) {
    const router = useRouter()
    const { setUserGroup } = useContext(GlobalUserGroup)
    const updateUserGroup = () => {
        setUserGroup(userGroup)
        router.push('/home')
    }
    return <button onClick={updateUserGroup}>{text}</button>
}
