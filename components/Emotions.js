import Image from 'next/image'
import Link from 'next/link'

const Emotions = ({ emotions, length, page }) => {
    return (
        <div>
            <h1>Emotions</h1>
            {emotions &&
                emotions.map((emotion) => {
                    if (parseInt(emotion.id) < length) {
                        return (
                            <Link
                                href={
                                    page
                                        ? '/user-group/emotions/'+ emotion.name
                                        : 'emotions/' + emotion.name
                                }
                                key={emotion.id}
                            >
                                <Image
                                    src={`/assets/under13/${emotion.under13.src}`}
                                    width={300}
                                    height={300}
                                />
                                <p key={emotion.id}>{emotion.name}</p>
                            </Link>
                        )
                    }
                })}
        </div>
    )
}

export default Emotions
