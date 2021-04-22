import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'


export default function InitializeGame() {

    const { initializeQuestions } = useContext(TriviaContext)

    return (
        <button onClick={initializeQuestions}>GET</button>
    )
}