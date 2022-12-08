import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import GlobalUserGroup from '../../context/GlobalContext'

import { getCookie } from 'cookies-next'

const Emotions = ({ emotions, length }) => {
    const { userGroup } = useContext(GlobalUserGroup)
    const user = getCookie('user')

    const date = new Date()
// 
    const array = user.split('-').reverse().toString().replaceAll(',', '/')
    const day = date.toLocaleDateString()

    // const sub = parseFloat(day) - parseFloat(array)

    console.log(day)
    console.log(user)
    // console.log(sub)

    return (
        <section>
            <div className="container">
                <h1 className="title">Today I am feeling...</h1>
                <div className="grid text-center">
                    {emotions &&
                        userGroup &&
                        emotions.map((emotion) => {
                            if (parseInt(emotion.id) <= length) {
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
