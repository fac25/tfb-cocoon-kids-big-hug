//import Image from 'next/image'

// import { useContext } from 'react'
// import GlobalUserGroup from '../lib/GlobalContext'

const DoMake = ({ currentDoMake }) => {
    // const { userGroup } = useContext(GlobalUserGroup)
    return (
        <article>
            <h2>{currentDoMake.title}</h2>
            <p>{currentDoMake.description}</p>
            {currentDoMake['how-it-helps'] && (
                <div>
                    <h3>How it Helps</h3>
                    <ul>
                        {currentDoMake['how-it-helps'].map((how) => (
                            <li key={how}>{how}</li>
                        ))}
                    </ul>
                </div>
            )}
            {currentDoMake['materials'] && (
                <div>
                    <h3>Materials</h3>
                    <ul>
                        {currentDoMake['materials']?.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {currentDoMake['instructions'] && (
                <div>
                    <h3>Instructions</h3>
                    <div>
                        {currentDoMake['instructions']?.map((item, index) => (
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
