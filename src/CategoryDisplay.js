import { useContext } from 'react'
import { TriviaContext } from './TriviaContext'

export default function CategoryDisplay() {

    const { category } = useContext(TriviaContext)

    return (
            <span>{category}</span>
    )
}