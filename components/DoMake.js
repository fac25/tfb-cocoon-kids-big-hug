import { useContext, useEffect, useState } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

const DoMake = ({ doMake }) => {
    const { userGroup } = useContext(GlobalUserGroup)

    return (
        <div>
            {doMake &&
                doMake[userGroup].map((make) => {
                    return (
                        <div key={make.id}>
                            <div>
                                {make.emotions.map((emotion) => {
                                    return <span>{emotion}</span>
                                })}
                            </div>
                            <p>{make.title}</p>
                            <p>{make.description}</p>
                            <div>
                                {make["how-it-helps"]?.map((how) => {
                                    return <span>{how}</span>
                                })}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default DoMake
