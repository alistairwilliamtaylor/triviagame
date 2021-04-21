import { useContext } from 'react'
import { TriviaContext } from './TriviaContext.js'

export default function() {

    const { questions } = useContext(TriviaContext)

    const currentQuestion = questions[0]

    console.log(currentQuestion)

    return (

        <section>
            <span>{currentQuestion.question}</span>
            <span>{currentQuestion.correct_answer}</span>
            <span>{currentQuestion.incorrect_answers[0]}</span>
            <span>{currentQuestion.incorrect_answers[1]}</span>
            <span>{currentQuestion.incorrect_answers[2]}</span>
        </section>
    )
}