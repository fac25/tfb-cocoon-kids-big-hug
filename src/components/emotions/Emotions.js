import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import GlobalUserGroup from '../../context/GlobalContext'

import { getCookie } from 'cookies-next'

const Emotions = ({ emotions, length }) => {
    const { userGroup } = useContext(GlobalUserGroup)

    const user = getCookie('user')
    return (
        <section>
            <div className="container">
                <h1 className="title">Today I am feeling...</h1>
                <div className="grid text-center">
                    {emotions &&
                        userGroup &&
                        emotions.map((emotion) => {
                            if (parseInt(emotion.id) <= length) {
                                if (user) {
                                    return (
                                        <Link
                                            href={'emotions/' + emotion.name}
                                            key={emotion.id}
                                        >
                                            <div className="cards">
                                                <Image
                                                    src={`/assets/img/${userGroup}/${emotion[userGroup].src}`}
                                                    width={300}
                                                    height={300}
                                                    alt={emotion.name}
                                                    className="cards__image"
                                                />
                                                <p className="cards__title">
                                                    {emotion.name[0].toUpperCase() +
                                                        emotion.name.substring(
                                                            1
                                                        )}
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                } else {
                                    if (emotion.restricted) {
                                        return (
                                            <Link
                                                href={
                                                    "authenticate"
                                                }
                                                key={emotion.id}
                                            >
                                                <div className="cards">
                                                    <Image
                                                        src={`/assets/img/${userGroup}/${emotion[userGroup].src}`}
                                                        width={300}
                                                        height={300}
                                                        alt={emotion.name}
                                                        className="cards__image"
                                                    />
                                                    <p className="cards__title">
                                                        {emotion.name[0].toUpperCase() +
                                                            emotion.name.substring(
                                                                1
                                                            )}
                                                    </p>
                                                </div>
                                            </Link>
                                        )
                                    }
                                    return (
                                        <Link
                                            href={'emotions/' + emotion.name}
                                            key={emotion.id}
                                        >
                                            <div className="cards">
                                                <Image
                                                    src={`/assets/img/${userGroup}/${emotion[userGroup].src}`}
                                                    width={300}
                                                    height={300}
                                                    alt={emotion.name}
                                                    className="cards__image"
                                                />
                                                <p className="cards__title">
                                                    {emotion.name[0].toUpperCase() +
                                                        emotion.name.substring(
                                                            1
                                                        )}
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                }
                            }
                        })}
                </div>
            </div>
        </section>
    )
}

export default Emotions
