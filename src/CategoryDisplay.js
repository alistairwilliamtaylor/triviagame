import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function CategoryDisplay() {

    const { category } = useContext(TriviaContext)

    return (
        <div>
            <span>{category}</span>
        </div>
    )
}