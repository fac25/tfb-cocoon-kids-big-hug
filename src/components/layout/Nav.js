import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Nav.module.css'
import { navMenu } from '../../const/menu'
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header>
            <nav className={styles.nav}>
                <div className={`${styles.logo} ${styles.container}`}>
                    <Link href="/welcome" className={styles.logo__link}>
                        <Image
                            src="/assets/img/logo.jpg"
                            height={62}
                            width={70}
                            alt="Cocoon kids logo"
                        />
                        <span>Coccon Kids & Big Hug</span>
                    </Link>
                    <div className={styles.btn_container}>
                        <Link href="/authenticate" className={styles.login}>
                            <span>Log in</span>
                        </Link>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setIsNavOpen(!isNavOpen)} // toggle isNavOpen state on click
                            className={styles.toggle}
                        >
                            <span className="sr-only">Open main menu</span>
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
                    <div
                        className={
                            isNavOpen
                                ? `${styles.Show} ${styles.menu__container}`
                                : `${styles.menu__container}`
                        }
                    >
                        <ul className={styles.menu__list}>
                            {navMenu.map((item) => {
                                return (
                                    <li
                                        key={item.name}
                                        className={styles.menu__list__item}
                                    >
                                        <Link href={item.route}>
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
