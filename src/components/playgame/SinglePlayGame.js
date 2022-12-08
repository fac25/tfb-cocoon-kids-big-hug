const SinglePlayGame = ({ game }) => {
    return (
        <article className="container">
            <h1 className="title">{game.name}</h1>
            <p className="lead">{game.description}</p>
            <iframe
                height={700}
                width="100%"
                src={game.game}
                title={game.name}
            ></iframe>
            <div>
                {game['how-it-helps'].map((emotion) => {
                    return <span key={emotion}>{emotion}</span>
                })}
            </div>
        </article>
    )
}

export default SinglePlayGame
