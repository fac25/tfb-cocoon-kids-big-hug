import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

const Emotions = ({ emotions, length, page }) => {
    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <div>
            <h1>Emotions</h1>
            {emotions &&
                userGroup &&
                emotions.map((emotion) => {
                    if (parseInt(emotion.id) < length) {
                        return (
                            <Link
                                href={
                                    page
                                        ? '/user-group/emotions/' + emotion.name
                                        : 'emotions/' + emotion.name
                                }
                                key={emotion.id}
                            >
                                <Image
                                    src={`/assets/img/${userGroup}/${emotion[userGroup].src}`}
                                    width={300}
                                    height={300}
                                    alt={emotion.name}
                                />
                                <p>{emotion.name}</p>
                            </Link>
                        )
                    }
                })}
        </div>
    )
}

export default Emotions
