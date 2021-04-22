import { useState, createContext } from 'react'
import axios from 'axios'

export const TriviaContext = createContext()

export function TriviaProvider(props) {

    const [score, setScore] = useState(0)

    const [questions, setQuestions] = useState([])
    
    function cleanUp(questionSet) {

        let cleanedQuestionSets = []
        questionSet.data.results.forEach(apiSet => {
            
            let answers = []

            apiSet.incorrect_answers.forEach(answer => {
                let withIncorrect = {
                    correct: false,
                    text: answer
                }
                answers.push(withIncorrect)
            })

            let withCorrect = {
                correct: true,
                text: apiSet.correct_answer
            }

            answers.push(withCorrect)

            cleanedQuestionSets.push(
                {
                    question: apiSet.question, 
                    answers: answers
                })
        })
        return cleanedQuestionSets
    }


    function initializeQuestions() {
        axios.get('https://opentdb.com/api.php?amount=10&category=23&type=multiple')
            .then(result => cleanUp(result))
            .then(result => setQuestions(result)) 
    }
    

    function updateScore(isCorrect) {
        if (isCorrect) {
            setScore(score + 1)
        }
    }

    function removeQuestion() {
        let questionCopy = [...questions]
        questionCopy.shift()
        setQuestions(questionCopy)
    }

    return (
        <TriviaContext.Provider value={ { questions, score, updateScore, initializeQuestions, removeQuestion } }>
            {props.children}
        </TriviaContext.Provider>
    )
}