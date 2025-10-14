
import { useState, useEffect, useMemo } from "react"


export default function Home(){
    
    return (
        <main style={{color:"white"}}>
            <h1>Learn React</h1> 

            <p style={{maxWidth: "500px", margin: "0 auto" }}>A 15hr <a href="https://scrimba.com/learn-react-c0e" target="_blank">Scrimba course</a> building 6 projects:
            
                <ul style={{textAlign: "left", marginTop: "15px"}}>
                    <li><strong>Business card:</strong> Static page using components</li>
                    <li><strong>Travel journal:</strong> Populating journal entries with imported data</li>
                    <li><strong>Chef Claude:</strong> React state. API called to hugging face AI.</li>
                    <li><strong>Meme Generator:</strong> About side effects and using useEffect()</li>
                    <li><strong>Tenzies:</strong> Die components, children, lift state up to the parent.</li>
                    <li><strong>Assembly Game:</strong> State, derived values, useEffect, import data - everything from previous lessons</li>
                </ul>
            
            </p>
            

        </main>
    )
}
