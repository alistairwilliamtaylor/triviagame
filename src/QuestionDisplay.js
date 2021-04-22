import { useContext } from 'react'
import { TriviaContext } from './TriviaContext.js'
import AnswerButton from './AnswerButton.js'
import { Redirect } from 'react-router-dom'

export default function QuestionDisplay() {

    const { questions } = useContext(TriviaContext)

    const currentQuestion = questions[0]

    if (currentQuestion) {
        return (
            <section>
                <h1>{currentQuestion.question}</h1>
                {currentQuestion.answers.map((answer, idx) => (
                    <AnswerButton key={idx} correct={answer.correct} text={answer.text} />
                ))}
            </section>
        )
    } else {
        return <Redirect to='/result' />
    }

}