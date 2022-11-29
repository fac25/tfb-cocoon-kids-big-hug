import Link from "next/link"

export default function AgeBtn({ userGroup, text }) {
    const updateAge = () => {
        localStorage.setItem("user-group", userGroup)
    }
    return <Link href={"/user-group"} onClick={updateAge}>{text}</Link>
}
 