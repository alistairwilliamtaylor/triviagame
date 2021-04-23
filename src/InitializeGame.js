import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'
import { Redirect } from 'react-router-dom'


export default function InitializeGame() {

    const { initializeQuestions, gameIsActive } = useContext(TriviaContext)

    if (gameIsActive) {
        return <Redirect to='/gameplay' />
    } else {
        return (
            <section>
                <h1>Welcome to history trivia!</h1>
                <button onClick={initializeQuestions}>START</button>
            </section>

        )
    }
}