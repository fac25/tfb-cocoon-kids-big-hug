import Layout from '../components/layout/Layout'
import UserGroupBtn from '../components/UserGroupBtn'
import styles from '../styles/Landing.module.css'

export default function Landing() {
    return (
        <Layout isLanding={true} pageTitle="Landing">
            <header className="container">
                <h1 className="title">
                    Cocoon Kids Big Hug is a therapeutic service for children
                </h1>
            </header>
            <section className="container mb-lg">
                <div className={styles.grid}>
                    <div
                        className={`${styles.grid__btn} ${styles['grid__btn--under13']}`}
                    >
                        <UserGroupBtn
                            userGroup="under13"
                            text="I’m a child under 13"
                        />
                    </div>
                    <div
                        className={`${styles.grid__btn} ${styles['grid__btn--over13']}`}
                    >
                        <UserGroupBtn
                            userGroup="over13"
                            text="I’m a child over 13"
                        />
                    </div>
                    <div
                        className={`${styles.grid__btn} ${styles['grid__btn--adult']}`}
                    >
                        <UserGroupBtn
                            userGroup="teacher"
                            text="I’m a teacher or professional"
                        />
                    </div>
                    <div
                        className={`${styles.grid__btn} ${styles['grid__btn--adult']}`}
                    >
                        <UserGroupBtn
                            userGroup="parent"
                            text="I’m a parent or carer"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
