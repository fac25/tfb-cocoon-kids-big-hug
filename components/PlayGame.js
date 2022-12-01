import GlobalUserGroup from '../lib/GlobalContext'
import { useContext } from 'react'
const PlayGame = ({ games }) => {
    const { userGroup } = useContext(GlobalUserGroup)

    console.log(games[userGroup])
    return (
        <div>
            {games[userGroup].map((game) => {
                return (
                    <Link href={game.id} key={game.id}>
                        <div>
                            {game.emotions.map((emotion) => (
                                <span>{emotion}</span>
                            ))}
                        </div>
                        <div>
                            {game['how-it-helps'].map((how) => (
                                <span>{how}</span>
                            ))}
                        </div>
                        <a href={game.game}>Play Game</a>
                    </Link>
                )
            })}
        </div>
    )
}

export default PlayGame
