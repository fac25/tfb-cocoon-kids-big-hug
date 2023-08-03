import styles from '../../styles/ExpandedVideo.module.css'
import dynamic from 'next/dynamic'
import React from 'react';
import Image from 'next/image'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


const ExpandedVideo = React.memo(({ videoData, onClose }) => {
    
    console.log("data",{videoData})
    return (
        <div className={styles.overlay}>
            <div className={styles.centered}>
                    <button  onClick={onClose}>
                    <Image
                        src={`/assets/img/closebutton.jpg`}
                        width={20}
                        height={20}
                        className={styles.closeButton}
                    />
                    </button>
                <div className={styles.title}>{videoData.title}</div>
                <div className={styles.videoWrapper}>
                    <ReactPlayer url={videoData.link} />
                </div>
                <div className={styles.description}>{videoData.description}</div>
            </div>
        </div>
    );
});
export default ExpandedVideo;
