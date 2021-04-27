import './AnswerButton.css'
import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function AnswerButton(props) {

    const { updateScore, removeQuestion, gameIsActive, setGameIsActive } = useContext(TriviaContext)

    function wait() {
        return new Promise((resolve, reject) => setTimeout(resolve, 3000))
    }

    function handleGuess(isCorrect) {
        setGameIsActive(false)
        wait()
            .then(val => setGameIsActive(true))
            .then(val => updateScore(isCorrect))
            .then(val => removeQuestion())
    }

    return (
        <button className={gameIsActive ? '' : `${props.correct}`} disabled={!gameIsActive} onClick={() => handleGuess(props.correct)}>
            {props.text}
        </button>
    )
}


