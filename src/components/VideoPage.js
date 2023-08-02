import styles from '../styles/Video.module.css'

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


const VideoPage = ({ videos }) => {
    return (
        <section>
            <div className={styles.grid}>
                {videos.map((eachVideo) => (
                    <div className={styles.card}>
                        <div className={styles.card__title}>{eachVideo.title}</div>
                        <div> {<ReactPlayer
                            url={eachVideo.link}
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={false}
                        />}</div>
                        <div className={styles.card__description}>{eachVideo.description}</div>
                        <div className={styles.card__tags}>
                            {(eachVideo.emotions).map((emotion) => (
                                <div className={styles.card__tag}>{emotion}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default VideoPage;