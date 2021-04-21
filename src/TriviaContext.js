import { useState, createContext } from 'react'

export const TriviaContext = createContext()

export function TriviaProvider(props) {

    const [questions, setQuestions] = useState([
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "hard",
            "question": "List the following Iranic empires in chronological order:",
            "correct_answer": "Median, Achaemenid, Parthian, Sassanid",
            "incorrect_answers": [
                "Median, Achaemenid, Sassanid, Parthian",
                "Achaemenid, Median, Parthian, Sassanid",
                "Achaemenid, Median, Sassanid, Parthian"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "hard",
            "question": "The Battle of Hastings was fought in which year?",
            "correct_answer": "1066",
            "incorrect_answers": [
                "911",
                "1204",
                "1420"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "hard",
            "question": "How many women joined the United States Armed Services during World War II?",
            "correct_answer": "350,000",
            "incorrect_answers": [
                "225,000",
                "100,000",
                "500,000"
            ]
        }
    ])

    // this function needs to fill the array with the ten questions from the axios request
    // const addQuestions = questions => {
    //     setQuestions()
    // }

    // this function just needs to shift the first item out of the array
    // const removeQuestion = () => {
    //     setQuestions()
    // }



    return (
        <TriviaContext.Provider value={ { questions } }>
            {props.children}
        </TriviaContext.Provider>
    )
}