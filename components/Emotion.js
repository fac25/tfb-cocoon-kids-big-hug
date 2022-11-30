import Image from 'next/image'

import { useContext } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

const SingleEmotion = ({ name, emotions }) => {
    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <div>
            {emotions.map((emotion) => {
                if (emotion.name === name) {
                    return (
                        <div key={emotion.id}>
                            <Image
                                src={`/assets/img/${userGroup}/${emotion[userGroup].src}`}
                                width={300}
                                height={300}
                                alt={emotion.name}
                            />
                            <h2>{emotion.name}</h2>
                            <p>{emotion[userGroup].description}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default SingleEmotion
