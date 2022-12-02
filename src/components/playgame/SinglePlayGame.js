const SinglePlayGame = ({ game }) => {
    // console.log(game)
    return (
        <article>
            {game[0].emotions.map((emotion) => {
                return <span key={emotion}>{emotion}</span>
            })}
        </article>
    )
}

export default SinglePlayGame
