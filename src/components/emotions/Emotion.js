import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import styles from '../../styles/Emotion.module.css'
import { useContext } from 'react'
import GlobalUserGroup from '../../context/GlobalContext'
{
    /* <ReactMarkdown>{emotion.name}</ReactMarkdown> */
}
const SingleEmotion = ({ emotion }) => {
    const { userGroup } = useContext(GlobalUserGroup)
    return (
        <>
            <header className={`${styles.header} ${styles.block}`}>
                <div>
                    <Image
                        src={`/assets/img/${userGroup}/${emotion[0][userGroup].src}`}
                        width={300}
                        height={300}
                        alt={emotion.name}
                        className={styles.header__image}
                    />
                </div>

                <div className={styles.header__info}>
                    <h2>
                        {emotion[0][userGroup].title
                            ? emotion[0][userGroup].title
                            : emotion[0][userGroup].name}
                    </h2>

                    <div className="lead">
                        <ReactMarkdown>
                            {emotion[0][userGroup].description}
                        </ReactMarkdown>
                    </div>
                </div>
                {emotion[0][userGroup].caution ? (
                    <div className="caution width-100">
                        {emotion[0][userGroup].caution}
                    </div>
                ) : (
                    ''
                )}
            </header>
            <section className={styles.block}>
                {emotion[0][userGroup].symptoms ? (
                    <>
                        <h3>Things you may notice</h3>
                        <ul>
                            {emotion[0][userGroup].symptoms.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </>
                ) : null}
            </section>
        </>
    )
}

export default SingleEmotion
