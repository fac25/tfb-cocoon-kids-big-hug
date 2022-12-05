//import Image from 'next/image'

// import { useContext } from 'react'
// import GlobalUserGroup from '../lib/GlobalContext'

const DoMake = ({ domake, name }) => {
    return (
        <article>
            {domake.map((make) => {
                return make.emotions.map((emotion) => {
                    if (emotion == name) {
                        return (
                            <div key={make.id}>
                                <h2>{make.title}</h2>
                                <p>{make.description}</p>
                                {make['how-it-helps'] && (
                                    <div>
                                        <h3>How it Helps</h3>
                                        <ul>
                                            {/* {make['how-it-helps'].map((how) => (
                                                <li key={how}>{how}</li>
                                            ))} */}
                                        </ul>
                                    </div>
                                )}
                                {make['materials'] && (
                                    <div>
                                        <h3>Materials</h3>
                                        <ul>
                                            {/* {make['materials']?.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))} */}
                                        </ul>
                                    </div>
                                )}
                                {make['instructions'] && (
                                    <div>
                                        <h3>Instructions</h3>
                                        <div>
                                            {make['instructions']?.map(
                                                (item, index) => (
                                                    <div key={`item-${index}`}>
                                                        <ul>
                                                            {/* {item.step?.map(
                                                                (item) => (
                                                                    <li
                                                                        key={
                                                                            item
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                )
                                                            )} */}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }
                })
            })}
        </article>
    )
}

export default DoMake
