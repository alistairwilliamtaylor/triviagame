import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'


export default function InitializeGame() {

    const { getQuestions } = useContext(TriviaContext)

    return (
        <button onClick={getQuestions}>GET</button>
    )
}