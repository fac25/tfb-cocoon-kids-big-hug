import Image from 'next/image'

// import { useContext } from 'react'
// import GlobalUserGroup from '../lib/GlobalContext'

const DoMake = ({ domake }) => {
    {
        console.log(domake)
    }
    return (
        <article>
            <h2>{domake.title}</h2>
            <p>{domake.description}</p>
            <Image
                src={`/assets/img/do/${domake.src}`}
                alt={domake.title}
                height={300}
                width={300}
            ></Image>
            <div>
                <h3>How it Helps</h3>
                <ul>
                    {domake['how-it-helps'].map((how) => {
                        return <li key={how}>{how}</li>
                    })}
                </ul>
            </div>
            <h3>Caution!</h3>
            <p>{domake.caution}</p>
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
                                <ul>
                                    {item.step?.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <Image
                                    src={`/assets/img/${item.src}`}
                                    alt={item.title}
                                    height={150}
                                    width={150}
                                ></Image>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </article>
    )
}

export default DoMake
