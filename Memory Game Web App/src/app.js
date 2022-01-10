import { useState, useEffect } from 'react'
import Card from './components/card'
import { images } from './data/images'
import './styles.css'

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const [disabled, setDisabled] = useState(false)

  const shuffle = () => {
    const cards = [...images, ...images].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
    
    setCards(cards)
    setFirstCard(null)
    setSecondCard(null)
    setTurns(0)
  }

  const reset = () => {
    setFirstCard(null)
    setSecondCard(null)
    setTurns((val) => val + 1)
    setDisabled(false)
  }

  const flip = (card) => firstCard ? setSecondCard(card) : setFirstCard(card)

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true)

      if (firstCard.src === secondCard.src) {
        setCards((object) => object.map((item) => item.src === firstCard.src ? { ...item, "matched": true } : item))
        reset()
      } else {
        setTimeout(() => reset(), 1000)
      }
    }
  }, [firstCard, secondCard])

  useEffect(() => shuffle(), [])
  
  return (
    <div className = "container">
      <h1>Mind Games</h1>
      <button onClick = { shuffle } className = "button">New Game</button>
      <div className = "grid">
        {
          cards.map((card) => <Card key = { card.id } data = { card } handler = { flip } blocked = { disabled } flipped = { card === firstCard || card === secondCard || card.matched } />)
        }
      </div>
      <p>Turns: { turns }</p>
    </div>
  )
}

export default App