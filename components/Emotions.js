import Image from 'next/image'

const Emotions = ({ emotions }) => {
    return (
        <div>
            <h1>Emotions</h1>
            {emotions.map((emotion) => {
                return (
                    <div key={emotion.id}>
                        <Image
                            src={`/assets/under13/${emotion.under13.src}`}
                            width={300}
                            height={300}
                        />
                        <p key={emotion.id}>{emotion.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Emotions
