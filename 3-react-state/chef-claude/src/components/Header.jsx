import ClaudeImage from "./../images/chef-claude-icon.png"

export default function Header(){
    return(
        <header className="">
            <img src={ClaudeImage} />
            <h1>Chef Claude</h1>
        </header>
    )
}