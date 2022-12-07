import Layout from '../components/layout/Layout'
import styles from '../styles/Contact.module.css'
export default function ContactUs() {
    return (
        <Layout pageTitle="Contact us">
            <div className={styles.contact}>
                <h1>Contact us</h1>
                <section>
                    <div className="container">
                        <div className={styles.grid}>
                            <div className={styles.box}>
                                <h2>Find us</h2>
                                <p>
                                    Surrey borders, Greater London, West London:
                                    Staines, Ashford, Stanwell, Feltham,
                                    Sunbury, Egham, Hounslow, Isleworth &
                                    surrounding areas.
                                </p>
                            </div>
                            <div className={styles.box}>
                                <h2>Email us</h2>
                                <a href="mailto:contactcocoonkids@gmail.com">
                                    contactcocoonkids@gmail.com
                                </a>
                            </div>
                            <div className={styles.box}>
                                <h2>Call us</h2>
                                <p>Email us to arrange a call back.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
