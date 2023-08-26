import React, { useState } from 'react';
import Layout from '../components/layout/Layout'
import Nav from '../components/layout/Nav'
import UserGroupBtn from '../components/UserGroupBtn'
import styles from '../styles/Landing.module.css'
import HowOld from '../components/HowOld'

export default function Landing() {
    const [openHowOld, setOpenHowOld] = useState<boolean>(false)


    const handleHowOldState = () => {
        setOpenHowOld(!openHowOld);
    };

    return (
        <div>
            <Nav />
            <Layout isLanding={true} pageTitle="Landing">

                <div className="container mt-0">
                    <header>
                        <h1 className="title">
                            Cocoon Kids Big Hug is a therapeutic service for
                            children and young people
                        </h1>
                    </header>
                    <section className="mb-lg">
                        <div className={styles.grid}>
                            <div className={`${styles.grid__btn} ${styles['grid__btn--howOld']}`} onClick={handleHowOldState} >
                                I&apos;m a child
                            </div>
                           
                            <div
                                className={`${styles.grid__btn} ${styles['grid__btn--school']}`}
                            >
                                <UserGroupBtn
                                    route="/schools"
                                    userGroup="teacher"
                                    text="I’m a teacher or professional"
                                />
                            </div>
                            <div
                                className={`${styles.grid__btn} ${styles['grid__btn--parent']}`}
                            >
                                <UserGroupBtn
                                    route="/parents"
                                    userGroup="parent"
                                    text="I&apos;m a parent or carer"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                {openHowOld && <HowOld onClose={handleHowOldState} />}
            </Layout>
        </div>
    )
}
