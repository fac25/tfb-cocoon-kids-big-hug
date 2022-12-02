import Link from 'next/link'

export default function WhatToDo() {
    return (
        <>
            <h1>What can I do today?</h1>
            <Link href={'/play'}>Play games</Link>
            <Link href={'/do'}>Make something</Link>
            <Link href={'/chat'}>Chat to someone</Link>
            <Link href={'/join'}>Go somewhere</Link>
        </>
    )
}
