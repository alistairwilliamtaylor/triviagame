import { useContext } from 'react'
import { TriviaContext } from './TriviaContext.js'
import AnswerButton from './AnswerButton.js'
import { Redirect } from 'react-router-dom'
import ScoreDisplay from './ScoreDisplay'
import CategoryDisplay from './CategoryDisplay'
import './QuestionDisplay.css'


export default function QuestionDisplay() {

    const { questions } = useContext(TriviaContext)

    const currentQuestion = questions[0]

    if (currentQuestion) {
        return (
            <section>
                <h1>{currentQuestion.question}</h1>
                <section className='question_grid'>
                    {currentQuestion.answers.map((answer, idx) => (
                        <AnswerButton key={idx} correct={answer.correct} text={answer.text} />
                    ))}
                </section>
                <section className='status_box'>
                    <CategoryDisplay />
                    <ScoreDisplay />
                </section>
            </section>
        )
    } else {
        return <Redirect to='/result' />
    }

}