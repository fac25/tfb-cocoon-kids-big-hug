import Image from 'next/image'

import { useContext } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

const SingleDoMake = ({ doMakes }) => {
    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <section>
            {doMakes.map((doMake) => {
                if (doMake.path === path) {
                    return (
                        <div key={doMake.id}>
                            <h2>{doMake.title}</h2>
                        </div>
                    )
                }
            })}
        </section>
    )
}

export default SingleDoMake
