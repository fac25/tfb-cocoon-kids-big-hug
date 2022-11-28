import { useRouter } from 'next/router'
import { useContext } from 'react'
import GlobalAge from '../lib/GlobalContext'

export default function AgeBtn({ userGroup, text }) {
    console.log(text)
    const router = useRouter()
    const { setUserGroup } = useContext(GlobalAge)
    const updateAge = () => {
        setUserGroup(userGroup)
        router.push('/home')
    }
    return <button onClick={updateAge}>{text}</button>
}
