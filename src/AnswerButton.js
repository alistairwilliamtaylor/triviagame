import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function AnswerButton(props) {

    const { updateScore } = useContext(TriviaContext)

    return (
        <button onClick={() => updateScore(props.correct)}>
            {props.text}
        </button>
    )
}
