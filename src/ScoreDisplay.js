import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function ScoreDisplay() {

    const { score } = useContext(TriviaContext)

    return (
        <span>{`${score}/10`}</span>
    )
}