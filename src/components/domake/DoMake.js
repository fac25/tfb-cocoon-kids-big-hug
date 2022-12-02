//import Image from 'next/image'

// import { useContext } from 'react'
// import GlobalUserGroup from '../lib/GlobalContext'

const DoMake = ({ domake }) => {
    return (
        <article>
            <h2>{domake.title}</h2>
            <p>{domake.description}</p>
            {domake['how-it-helps'] && (
                <div>
                    <h3>How it Helps</h3>
                    <ul>
                        {domake['how-it-helps'].map((how) => (
                            <li key={how}>{how}</li>
                        ))}
                    </ul>
                </div>
            )}
            {domake['materials'] && (
                <div>
                    <h3>Materials</h3>
                    <ul>
                        {domake['materials']?.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {domake['instructions'] && (
                <div>
                    <h3>Instructions</h3>
                    <div>
                        {domake['instructions']?.map((item, index) => (
                            <div key={`item-${index}`}>
                                {/* <Image
                                src={item.src}
                                alt=""
                                width={300}
                                height={300}
                            /> */}
                                <ul>
                                    {item.step?.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </article>
    )
}

export default DoMake
