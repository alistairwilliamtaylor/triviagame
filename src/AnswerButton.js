import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function AnswerButton(props) {

    const { updateScore, removeQuestion } = useContext(TriviaContext)

    function handleGuess(isCorrect) {
        updateScore(isCorrect)
        removeQuestion()
    }

    return (
        <button onClick={() => handleGuess(props.correct)}>
            {props.text}
        </button>
    )
}
