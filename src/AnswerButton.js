import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function AnswerButton(props) {

    const { questions, updateScore, removeQuestion } = useContext(TriviaContext)

    function handleGuess(isCorrect) {
        updateScore(isCorrect)
        removeQuestion()
        if (questions.length === 0) {
            console.log('youre finished')
        }

    }

    return (
        <button onClick={() => handleGuess(props.correct)}>
            {props.text}
        </button>
    )
}
