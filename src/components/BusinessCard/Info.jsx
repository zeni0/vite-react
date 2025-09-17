import Photo from "../../assets/photo.png"

export default function Info(){
    return (
        <section>
            <img src={Photo} alt="Profile photo" />
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <span>laurasmith.website</span>

            <div className="buttons">
                <button className="email-button">Email</button>
                <button className="linkedin-button">LinkedIn</button>
            </div>
        </section>
    )
}