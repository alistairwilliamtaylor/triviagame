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
    
    function getQuestions() {
        axios.get('https://opentdb.com/api.php?amount=10&category=23&type=multiple')
            .then(response => {
                let cleanedQuestionSets = []
                response.data.results.forEach(apiSet => {
                    
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
                console.log(cleanedQuestionSets)
                setQuestions(cleanedQuestionSets)
            })
    }

    function updateScore(correct) {
        if (correct) {
            setScore(score + 1)
        }
    }

    // // this function transforms the API result into an array of objects - keys of answerStatus and answerText
    // const makeAnswerList = (questions) => {
    //     let newQuestions = [...questions]
    //     newQuestions.map(question => {
    //         let correctAnswer = {
    //             status: correct,
    //             answer: answer["correct_answer"]
    //         }

    //     })
    // }

    // this function needs to fill the array with the ten questions from the axios request
    // const addQuestions = questions => {
    //     setQuestions()
    // }

    // this function just needs to shift the first item out of the array
    // const removeQuestion = () => {
    //     setQuestions()
    // }



    return (
        <TriviaContext.Provider value={ { questions, score, updateScore, getQuestions } }>
            {props.children}
        </TriviaContext.Provider>
    )
}