import { languages } from "../components/AssemblyEndgame/languages"
import { useState } from 'react'
import { clsx } from "clsx"

export default function AssemblyEndgame() {
    // create language chips
    const languagesArr = languages.map(lang => 
        <div 
            key={lang.name} 
            className="chip" 
            style={{backgroundColor:lang.backgroundColor,color:lang.color}}>
            {lang.name}
        </div>)
    // initialise word
    const [currentWord, setCurrentWord] = useState('react')
    // store guessed letter by user
    const [guessedLetters, setGuessedLetters] = useState([])

    const letterElements = [...currentWord].map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect
        })
        return (
            <span 
                key={index}
                className={className}
            >  
                {letter}
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
        
        //console.log(className)

        
        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })
    //console.log(keyboard)
    

    function addGuessedLetter(letter) {
        // store user's guess
        setGuessedLetters(prev => 
            prev.includes(letter) 
            ? prev
            : [...prev, letter])
        // check if letter is correct
        // setKeyboard(prevKeyboard =>
        //     prevKeyboard.map(keyObj => 
        //         currentWord.includes(letter) 
        //         ? {...keyObj, class: 'correct'}
        //         : keyObj
        //     )
        // )
    }

    //console.log(guessedLetters)
    
    return (
        <div id="assembly" className="container">
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
            </header>
            <main>
                <section className="message-container">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
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
                <button className="new-game">New Game</button>
            </main>
        </div>
    )
}