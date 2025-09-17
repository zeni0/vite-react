
import React from "react"

export default function Main() {
    
    // API call get 100 memes and store in state

    // Initialize state for top and bottom text
    const [meme, setMeme] = React.useState({
        topText: "one does not simply",
        bottomText: "walk into mordor",
        image: "https://i.imgflip.com/1bij.jpg" // Default meme image
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function newMemeImage() {
        const randomNum = Math.round(Math.random() * allMemes.length)

        setMeme(prevMeme => ({
            ...prevMeme,
            image: allMemes[randomNum].url
        }))
    }

    function updateText(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input type="text" name="topText" onChange={updateText} value={meme.topText} />
                <input type="text" name="bottomText" onChange={updateText} value={meme.bottomText} />
                <button onClick={newMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} className="meme--image" />
                <span className="meme--text top">{meme.topText}</span>
                <span className="meme--text bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}