import logo from "../../assets/logo.png";
import "./header.css";

export const Header = () => {

    const submitButton = () => {
        alert("Button pressed");
    }

    return (
        <header className="header">
            <img src={logo} alt="logo" className="header-logo" />
            <h1 className="header-title" >Roundtable</h1>
            <div className="search-container">
                <input type="text" className="header-searchbar" placeholder="Search" />
                <select className="header-select" >
                    <option value="post">Post</option>
                    <option value="subreddit">Subreddit</option>
                </select>
                <button className="header-search-button" onClick={submitButton} >Search</button>
            </div>
        </header>
    )
}