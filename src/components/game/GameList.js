import React, { useEffect, useState } from "react"
import { getGames } from "../../managers/GameManager.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__name">{game.name}</div>
                        <div className="game__description">{game.description}</div>
                        <div className="game__genre"> {game.genre.genre}</div>
        
                    </section>
                })
            }
        </article>
    )
}