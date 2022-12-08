import { useContext } from 'react'
import GlobalUserGroup from '../context/GlobalContext'

import { Button } from '@mui/material'
import styles from '../styles/Chat.module.css'

export default function ChatSpeak({ chat }) {
    const { userGroup } = useContext(GlobalUserGroup)

    return (
        <div className="container">
            <h1 className="title">Speak to someone</h1>
            <div className={styles.wrapper}>
                <p className={styles.lead}>
                    Links to{' '}
                    <a
                        href="http://childline.org.uk"
                        _target="blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Childline.org.uk
                    </a>{' '}
                    in a new tab. <br />
                    (You will need to create an account)
                </p>
                <div className={styles.chat__btn__container}>
                    <Button variant="outlined">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                                userGroup == 'under13'
                                    ? `${chat[0].under13.email}`
                                    : `${chat[0].over13.email}`
                            }
                        >
                            message via email
                        </a>
                    </Button>

                    <Button variant="outlined">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                                userGroup == 'under13'
                                    ? `${chat[0].under13.chat}`
                                    : `${chat[0].over13.chat}`
                            }
                        >
                            chat to someone
                        </a>
                    </Button>

                    <Button variant="outlined">
                        <a
                            href={
                                userGroup == 'under13'
                                    ? `tel:${chat[0].under13.phone}`
                                    : `tel:${chat[0].over13.phone}`
                            }
                        >
                            {userGroup == 'under13'
                                ? `${chat[0].under13.phone}`
                                : `${chat[0].over13.phone}`}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
