import styles from '../styles/ExpandedVideo.module.css'
import Image from 'next/image'


export default function HowOld({onClose}) {
   
    return (
        <div className={styles.overlay}>
            <div className={styles.centered}>
                HOW OLD ARE YOU
                <Image
                        src={`/assets/img/closebutton.jpg`}
                        alt=''
                        width={20}
                        height={20}
                        onClick={onClose}
                        className={styles.closeButton}
                    />
                  
            </div>
        </div>
    )
}