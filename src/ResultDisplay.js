import ScoreDisplay from './ScoreDisplay.js'
import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'
import { Redirect } from 'react-router-dom'
import CategoryDisplay from './CategoryDisplay'

export default function ResultDisplay() {

    const { gameIsActive, endGame } = useContext(TriviaContext)

    
    if (!gameIsActive) {
        return <Redirect to='/' />
    }
  
    return (
        <section>
            <h1>Congratulations, your final score is:</h1>
            <ScoreDisplay />
            <CategoryDisplay />
            <button onClick={endGame}>PLAY AGAIN</button>
        </section>
    )
    
}