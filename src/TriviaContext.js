import { useState, createContext } from 'react'
import axios from 'axios'
import _ from 'lodash'
import he from 'he'

export const TriviaContext = createContext()

export function TriviaProvider(props) {

    const [score, setScore] = useState(0)

    const [questions, setQuestions] = useState([])

    const [gameIsActive, setGameIsActive] = useState(false)
    
    const [category, setCategory] = useState('')
    
    function cleanUp(questionSet) {

        let cleanedQuestionSets = []
        questionSet.data.results.forEach(apiSet => {
            
            let answers = []

            apiSet.incorrect_answers.forEach(answer => {
                let withIncorrect = {
                    correct: false,
                    text: he.decode(answer)
                }
                answers.push(withIncorrect)
            })

            let withCorrect = {
                correct: true,
                text: apiSet.correct_answer
            }

            answers.push(withCorrect)

            let shuffledAnswers = _.shuffle(answers)

            cleanedQuestionSets.push(
                {
                    question: he.decode(apiSet.question), 
                    answers: shuffledAnswers
                })
        })
        return cleanedQuestionSets
    }

    function activateGame() {
        setGameIsActive(true)
        setScore(0)
    }

    function endGame() {
        setGameIsActive(false)
    }

    function initializeQuestions(category) {
        setCategory(category)
        let categoryKey = getCategoryKey(category) 
        axios.get(`https://opentdb.com/api.php?amount=10&category=${categoryKey}&type=multiple`)
            .then(result => cleanUp(result))
            .then(result => setQuestions(result))
            .then(result => activateGame())
    }

    function getCategoryKey(categoryName) {
        const categoryTable = {
            'History': 23,
            'Geography': 22,
            'Computer Science': 18,
            'Sport': 21
        }
        return categoryTable[categoryName]
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
        <TriviaContext.Provider value={ { questions, score, gameIsActive, category, endGame, updateScore, initializeQuestions, setGameIsActive, removeQuestion } }>
            {props.children}
        </TriviaContext.Provider>
    )
}