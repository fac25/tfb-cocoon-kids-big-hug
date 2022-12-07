const SinglePlayGame = ({ game }) => {
    return (
        <article>
            <p>{game.name}</p>
            <iframe
                height={700}
                width="100%"
                src={game.game}
                title={game.name}
            ></iframe>
            <p>
                {game['how-it-helps'].map((emotion) => {
                    return <span key={emotion}>{emotion}</span>
                })}
            </p>
        </article>
    )
}

export default SinglePlayGame
