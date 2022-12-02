import Link from 'next/link'

export default function WhatToDo() {
    return (
        <>
            <h1>What can I do today?</h1>
            <Link href={'/play-game'}>Play games</Link>
            <Link href={'/do-make'}>Make something</Link>
            <Link href={'/chat-speak'}>Chat to someone</Link>
            <Link href={'/join-go'}>Go somewhere</Link>
        </>
    )
}
