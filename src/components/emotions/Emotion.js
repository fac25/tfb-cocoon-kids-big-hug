import Image from 'next/image'

import { useContext } from 'react'
import GlobalUserGroup from '../../context/GlobalContext'

const SingleEmotion = ({ emotion }) => {
    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <div>
             <Image
                src={`/assets/img/${userGroup}/${emotion[0][userGroup].src}`}
                width={300}
                height={300}
                alt={emotion.name}
            />
            <h2>{emotion.name}</h2>
            <p>{emotion[0][userGroup].description}</p>
        </div>
    )
}

export default SingleEmotion
