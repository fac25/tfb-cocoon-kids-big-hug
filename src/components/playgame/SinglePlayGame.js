const SinglePlayGame = ({game}) => {
    console.log(game)
    return ( <div>
        {game[0].emotions.map(emotion =>{
            return <span>{emotion}</span>
        })}
    </div> );
}
 
export default SinglePlayGame;