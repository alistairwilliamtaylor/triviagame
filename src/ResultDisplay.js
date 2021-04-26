import ScoreDisplay from './ScoreDisplay.js'
import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'
import { Redirect } from 'react-router-dom'
import CategoryDisplay from './CategoryDisplay'
import './ResultDisplay.css'

export default function ResultDisplay() {

    const { gameIsActive, endGame } = useContext(TriviaContext)

    
    if (!gameIsActive) {
        return <Redirect to='/' />
    }
  
    return (
        <section>
            <h1>Congratulations!</h1>
            <div className='score_display'>
                <ScoreDisplay />
            </div>
            <p className='category_display'>Category: <CategoryDisplay /></p>
            <button className='play_again' onClick={endGame}>PLAY AGAIN</button>
        </section>
    )
    
}