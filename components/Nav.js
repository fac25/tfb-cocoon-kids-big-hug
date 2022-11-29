import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const navMenu = [
        { name: 'Home', route: '/home' },
        { name: 'About us', route: '/about' },
        { name: 'Emotions', route: '/emotions' },
        { name: 'Select different age content', route: '/' },
        { name: 'Get help now', route: '/help' },
    ]
    return (
        <header>
            <nav>
                <div>
                    <Link href="/home">
                        <Image
                            src="/assets/logo.jpg"
                            height={62}
                            width={70}
                            alt="Cocoon kids logo"
                        />
                    </Link>
                    <div>
                        <Link href="/login" passHref>
                            <span>Log in</span>
                        </Link>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setIsNavOpen(!isNavOpen)} // toggle isNavOpen state on click
                        >
                            {/* <span className="sr-only">Open main menu</span> */}
                            <svg
                                className=" "
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ height: '20px' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className={isNavOpen ? 'openNav' : 'closeNav'}>
                        <ul>
                            {navMenu.map((item) => {
                                return (
                                    <li key={item.name}>
                                        <Link href={item.route} passHref>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
