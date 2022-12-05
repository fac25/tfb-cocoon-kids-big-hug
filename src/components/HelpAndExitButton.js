import Link from 'next/link'

const HelpAndExitButton = () => {
    const handleExit = () => {
        window.location.replace('https://google.com')
    }
    return (
        <div className="help-and-exit">
            <Link href="/help">
                <span>I need urgent help now!</span>
                <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23 11.5C23 5.152 17.848 0 11.5 0C5.152 0 0 5.152 0 11.5C0 17.848 5.152 23 11.5 23C17.848 23 23 17.848 23 11.5ZM11.5 12.65H6.9V10.35H11.5V6.9L16.1 11.5L11.5 16.1V12.65Z"
                        fill="white"
                    />
                </svg>
            </Link>
            <button onClick={handleExit}>
                <span>I need privacy, exit now!</span>
                <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23 11.5C23 5.152 17.848 0 11.5 0C5.152 0 0 5.152 0 11.5C0 17.848 5.152 23 11.5 23C17.848 23 23 17.848 23 11.5ZM11.5 12.65H6.9V10.35H11.5V6.9L16.1 11.5L11.5 16.1V12.65Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    )
}

export default HelpAndExitButton
