import './card.css'

export default function Card({ data, handler, blocked, flipped }) {
  return (
    <div className = "card">
        <div className = { flipped ? "flip" : "" }>
            <img src = { data.src } className = "face" alt = "card_face" />
            <img src = "/assets/cover.png" onClick = { () => blocked ? null : handler(data) } className = "back" alt = "card_back" />
        </div>
    </div>
  )
}