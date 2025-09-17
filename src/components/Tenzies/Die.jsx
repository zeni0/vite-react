
export default function Die(props) {
    return (
        <button 
            className={props.isHeld ? "green" : ""}
            onClick={() => props.hold(props.id)}
        >{props.number}</button>
    )
}