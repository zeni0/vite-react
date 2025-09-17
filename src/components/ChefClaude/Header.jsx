import logo from "../../assets/chef-claude-icon.png"

export default function Header(){
    return (
        <header className="chef-claude-header">
            <img src={logo} alt="Chef Claude" />
            <p>Chef Claude</p>
        </header>
    )
}