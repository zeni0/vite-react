
import Die from "./Die"
import { useState, useRef, useEffect } from 'react'
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function Main() {
    
    const [diceNumbers, setDiceNumbers] = useState(() => diceNumberArray())
    const buttonRef = useRef(null)
    const gameWon = diceNumbers.every(die => 
        die.isHeld && die.value === diceNumbers[0].value
    )

    useEffect(() => {
        if(gameWon) {
            buttonRef.current.focus()
        }
    })

    function diceNumberArray() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                }))
    }

    function rollDice() {
        if (!gameWon) {
            setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => 
                !die.isHeld 
                    ? {...die, value: Math.ceil(Math.random() * 6) } 
                    : die
                )
            )
        } else {
            setDiceNumbers(diceNumberArray())
        }
        
    }

    function hold(id) {
        setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => 
            die.id === id 
                ? {...die, isHeld: !die.isHeld} 
                : die
            )
        )
    }

    const diceComponents = diceNumbers.map(obj => (
        <Die 
            key={obj.id} 
            isHeld={obj.isHeld} 
            number={obj.value}
            hold={hold}
            id={obj.id} 
        />
    ))
    
    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die-container">
                {diceComponents}
            </div>
            <button ref={buttonRef} className="roll" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
        </main>
    )
}