import headerImage from "../images/chef-claude-icon.png"

export default function Header(){
    return(
        <header>
            <div className="header-content">
                <img src={headerImage} alt="header-image" width="40px" height="50px"/>
                <h1>Chef Claude</h1>
            </div>
        </header>
    )
}