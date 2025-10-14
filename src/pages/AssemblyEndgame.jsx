import { languages } from "../components/AssemblyEndgame/languages"
import { getFarewellText, randomWord } from "../components/AssemblyEndgame/utils"
import { useState, useEffect } from 'react'
import { clsx } from "clsx"
import Confetti from "react-confetti"

export default function AssemblyEndgame() {
    
    // initialise word
    const [currentWord, setCurrentWord] = useState(() => randomWord())
    // store guessed letter by user
    const [guessedLetters, setGuessedLetters] = useState([])
    // check guess count
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    
    const [farewellMessage, setFarewellMessage] = useState("")
    // Derived values
    const isGameWon = [...currentWord].every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    useEffect(() => {
        if (wrongGuessCount > 0 && wrongGuessCount < 8) {
            setFarewellMessage(getFarewellText(languages[wrongGuessCount-1].name))
        }
    }, [wrongGuessCount])

    // create language chips
    const languagesArr = languages.map((lang, index) => 
        <span 
            key={lang.name} 
            className={index < wrongGuessCount  ? "chip lost" : "chip"} 
            style={{backgroundColor:lang.backgroundColor,color:lang.color}}>
            {lang.name}
        </span>)
    
    // create displayed word
    const letterElements = [...currentWord].map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return (
            <span key={index} className={letterClassName}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })
    
    // create keyboard
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)

        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        return (
            <button
                disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`}
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })
    

    function addGuessedLetter(letter) {
        setFarewellMessage("")
        // store user's guess
        setGuessedLetters(prev => 
            prev.includes(letter) 
            ? prev
            : [...prev, letter])
    }

    const messageStatus = clsx("message-container",{
            won: isGameWon,
            lost: isGameLost,
            farewell: farewellMessage
        })

    
    function startNewGame() {
        setCurrentWord(randomWord())
        setGuessedLetters([])
    }

    return (
        <div id="assembly" className="container">
            {isGameWon && <Confetti />}
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
            </header>
            <main>
                <section 
                    aria-live="polite" 
                    role="status" 
                    className={messageStatus}
                >
                    {isGameWon && <><h2>You win!</h2><p>Well done! 🎉</p></>}
                    {isGameLost && <><h2>Game over!</h2><p>You lose! Better start learning Assembly 😭</p></>}
                    {farewellMessage}
                </section>
                <section className="languages">
                    {languagesArr}
                </section>
                <section className="display-letters">
                    {letterElements}
                </section>
                <section className="keyboard">
                    {keyboardElements}
                </section>
                {isGameOver && <button className="new-game" onClick={startNewGame}>New Game</button>}
            </main>
        </div>
    )
}