import Link from 'next/link'

const HelpAndExitButton = () => {
    const handleExit = () => {
        window.location.replace("https://google.com")
    }
    return (
        <div className="help-and-exit">
            <button onClick={handleExit}>Exit now!</button>
            <Link href="/help">Get help now!</Link>
        </div>
    )
}

export default HelpAndExitButton
