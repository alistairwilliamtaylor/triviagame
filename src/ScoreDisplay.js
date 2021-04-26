import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function ScoreDisplay() {

    const { score, questions } = useContext(TriviaContext)

    function questionsAnswered() {
        return (10 - questions.length)
    }

    return (
        <div>
            <span>{score}/{questionsAnswered()}</span>
        </div>
    )
}