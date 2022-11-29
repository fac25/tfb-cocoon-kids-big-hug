import { useRouter } from 'next/router'
import { useContext } from 'react'
import GlobalAge from '../lib/GlobalContext'
import Link from "next/link"

export default function AgeBtn({ userGroup, text }) {
    console.log(text)
    const router = useRouter()
    const { setUserGroup } = useContext(GlobalAge)
    const updateAge = () => {
        localStorage.setItem("user-group", userGroup)
        // setUserGroup(userGroup)
        // router.push('/home')
    }
    return <Link href={"/user-group"} onClick={updateAge}>{text}</Link>
}
 