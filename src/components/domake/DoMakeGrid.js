//import { useContext } from 'react'
//import GlobalUserGroup from '../context/GlobalContext'
import styles from '../../styles/Activities.module.css'
import Link from 'next/link'
import Image from 'next/image'
const DoMakeGrid = ({ doMakes }) => {
    //const { userGroup } = useContext(GlobalUserGroup)
    function excerpt(str) {
        return str.replace(/^(.{140}[^\s]*).*/, '$1')
    }
    return (
        <section>
            <div className={styles.grid}>
                {doMakes &&
                    doMakes.map((make) => {
                        return (
                            <div key={make.id} className={styles.card}>
                                <div className={styles.card__header}>
                                    {make.src ? (
                                        <Image
                                            src={`/assets/img/do/${make.src}`}
                                            alt={make.title}
                                            width={500}
                                            height={334}
                                            className={styles.card__image}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className={styles.card__body}>
                                    <h2 className={styles.card__title}>
                                        {make.title}
                                    </h2>
                                    <p>
                                        {excerpt(make.description)}
                                        <span>...</span>
                                    </p>
                                </div>
                                <div className={styles.card__tags}>
                                    {make.emotions.map((emotion, index) => {
                                        return (
                                            <span
                                                className={styles.card__tag}
                                                key={index}
                                            >
                                                {emotion}
                                            </span>
                                        )
                                    })}
                                </div>
                                <Link
                                    href={`/do/${make.title}`}
                                    className="stretched-link"
                                >
                                    {' '}
                                </Link>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default DoMakeGrid
