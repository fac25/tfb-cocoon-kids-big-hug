import { useContext } from 'react'
import GlobalUserGroup from '../context/GlobalContext'

import Link from 'next/link'

const DoMakeGrid = ({ doMakes }) => {
    const { userGroup } = useContext(GlobalUserGroup)

    return (
        <div>
            {doMakes &&
                doMakes[userGroup].map((make) => {
                    return (
                        <Link
                            href={`/do/${userGroup}-${make.title}`}
                            key={make.id}
                        >
                            <div>
                                {make.emotions.map((emotion) => {
                                    return <span key={emotion}>{emotion}</span>
                                })}
                            </div>
                            <p>{make.title}</p>
                            <p>{make.description}</p>
                            <div>
                                {make['how-it-helps']?.map((how) => {
                                    return <span key={how}>{how}</span>
                                })}
                            </div>
                        </Link>
                    )
                })}
        </div>
    )
}

export default DoMakeGrid
