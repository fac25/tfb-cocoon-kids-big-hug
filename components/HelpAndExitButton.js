import Link from 'next/link'

const HelpAndExitButton = () => {
    const handleExit = () => {
        window.location.replace("https://google.com")
    }
    return (
        <div className="help-and-exit">
            <button onClick={handleExit}>Exit</button>
            <Link href="/help">Help</Link>
        </div>
    )
}

export default HelpAndExitButton
