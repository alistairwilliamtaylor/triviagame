import { useState, createContext } from 'react'
import axios from 'axios'

export const TriviaContext = createContext()

export function TriviaProvider(props) {

    const [score, setScore] = useState(0)

    const [questions, setQuestions] = useState([
        {
            question: "List the following Iranic empires in chronological order:",
            answers: [
                {
                correct: true,
                text: "Median, Achaemenid, Parthian, Sassanid"
                },
                {
                correct: false,
                text: "Median, Achaemenid, Sassanid, Parthian"
                },
                {
                correct: false,
                text: "Achaemenid, Median, Parthian, Sassanid"
                },
                {
                correct: false,
                text: "Achaemenid, Median, Sassanid, Parthian"
                }
            ]
        }
    ])
    
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


    async function initializeQuestions() {
        let questionSet = await axios.get('https://opentdb.com/api.php?amount=10&category=23&type=multiple')

        let cleanedQuestionSet = cleanUp(questionSet)

        setQuestions(cleanedQuestionSet)
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