import { useContext } from 'react'
import { TriviaContext } from './TriviaContext.js'
import AnswerButton from './AnswerButton.js'

export default function() {

    const { questions } = useContext(TriviaContext)

    const currentQuestion = questions[0]

    return (

        <section>
            <h1>{currentQuestion.question}</h1>
            {currentQuestion.answers.map((answer, idx) => (
                <AnswerButton key={idx} correct={answer.correct} text={answer.text} />
            ))}
        </section>
        // then the big idea is to pass the status in as the parameter for the click Handler - then we evaluate true or false
    )
}