import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createGame, getGenres } from '../../managers/GameManager.js'


export const GameForm = () => {
    const navigate = useNavigate()
    const [genres, setGenres] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        name: "",
        description: "",
        genre: 0
    })

    useEffect(() => {
        // TODO: Get the game types, then set the state
        getGenres().then(res => setGenres(res))
    }, [])

    const changeGameState = (event) => {
        const copy = { ...currentGame }
        copy[event.target.name] = event.target.value
        setCurrentGame(copy)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Game Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentGame.name}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Game Description: </label>
                    <input type="text" name="description" required className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Genre of Game: </label>
                <select
                        name="genre"
                        className="form-control"
                        value={currentGame.game_type}
                        onChange={(event) => {
                            const copy = { ...currentGame }
                            copy.genre = parseInt(event.target.value)
                            setCurrentGame(copy)
                        }}>
                        <option value="0">Choose:</option>
                        {genres.map(genre => ( 
                                    <option key={`genre--${genre.id}`} value={genre.id} name={genre.genre}>{genre.genre}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        name: currentGame.name,
                        description: currentGame.description,
                        genre: currentGame.genre
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => navigate("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}
