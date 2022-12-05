import { useContext } from 'react'
import GlobalUserGroup from '../context/GlobalContext'

export default function ChatSpeak({ chat }) {
    const { userGroup } = useContext(GlobalUserGroup)

    return (
        <>
            <h2>Speak to someone</h2>

            <div>email</div>
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

            <div>chat</div>
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

            <div>phone</div>
            <div>
                {userGroup == 'under13'
                    ? `${chat[0].under13.phone}`
                    : `${chat[0].over13.phone}`}
            </div>
        </>
    )
}
