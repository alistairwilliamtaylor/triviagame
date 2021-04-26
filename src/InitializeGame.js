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
                <h1>Welcome to trivia!</h1>
                <h2>Please choose a topic:</h2>
                <button onClick={() => initializeQuestions('History')}>History</button>
                <button onClick={() => initializeQuestions('Computer Science')}>Computer Science</button>
                <button onClick={() => initializeQuestions('Geography')}>Geography</button>
                <button onClick={() => initializeQuestions('Sport')}>Sport</button>
            </section>

        )
    }
}