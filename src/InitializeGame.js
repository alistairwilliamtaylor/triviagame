import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'
import { Redirect } from 'react-router-dom'


export default function InitializeGame() {

    const { initializeQuestions, questions } = useContext(TriviaContext)

    if (questions.length > 0) {
        return <Redirect to='/gameplay' />
    } else {
        return (
            <button onClick={initializeQuestions}>GET</button>
        )
    }
}