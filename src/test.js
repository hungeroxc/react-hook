import React, {useState} from 'react'

const emojiSet = ['🎃', '👻', '🧟', '😱', '👽', '💀']

export const EmojiGenerator =  () => {
    const [emoji, setEmoji] = useState(emojiSet[0])

    const generateEmoji = () => {
        let randomIndex = Math.floor(Math.random() * emojiSet.length)
        let randomEmoji = emojiSet[randomIndex]

        setEmoji(randomEmoji)
    }

    return (
            <div>
                <span >{emoji}</span>
                <button onClick={ generateEmoji }>Generate</button>
            </div>
    )
}

function App() {
    return (
        <div>
            <EmojiGenerator />
        </div>
    )
}

export default App

