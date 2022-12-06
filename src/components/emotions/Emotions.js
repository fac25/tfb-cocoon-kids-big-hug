import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import GlobalUserGroup from '../../context/GlobalContext'

const Emotions = ({ emotions, length }) => {
    console.log(emotions.emotions)

    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <section>
            <div className="container">
                <h1 className="title">Today I am feeling...</h1>
                <div className="grid text-center">
                    {emotions &&
                        userGroup &&
                        emotions.emotions.map((emotion) => {
                            if (parseInt(emotion.id) < length) {
                                return (
                                    <Link href={'welcome'} key={emotion.id}>
                                        <div className="cards">
                                            <Image
                                                src={`/assets/img/${userGroup}/${emotion[userGroup].src}`}
                                                width={300}
                                                height={300}
                                                alt={emotion.name}
                                                className="cards__image"
                                            />
                                            <p className="cards__title">
                                                {emotion.name}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
                </div>
            </div>
        </section>
    )
}

export default Emotions
