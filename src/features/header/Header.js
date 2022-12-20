import { setSearchTerm, setSearchType } from "../../slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSearchTerm, selectSearchType } from "../../slices/searchSlice";
import { fetchSearchedPosts } from "../../slices/redditPostsSlice";
import { fetchSearchedSubreddits } from "../../slices/subredditsSlice";
import logo from "../../assets/logo.png";
import "./header.css";

export const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const searchTerm = useSelector(selectSearchTerm);
    const searchType = useSelector(selectSearchType);

    const submitButton = () => {
        if (searchTerm !== "") {
            if (searchType === "posts") {
                dispatch(fetchSearchedPosts(searchTerm));
            } else if (searchType === "subreddits") {
                dispatch(fetchSearchedSubreddits(searchTerm));
            }
            dispatch(setSearchTerm(""));
            
        } else {
            alert("Please enter a search term");
        }
        dispatch(setSearchTerm(""));
        setTimeout(() => {
            history.push("/searchResults");
        }, 1200);
    }

    const handleBarChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    const handleSelectChange = (e) => {
        dispatch(setSearchType(e.target.value));
    }

    const redirectHome = () => {
        window.location.href = "http://localhost:3000";
    }

    return (
        <header className="header">
            <img src={logo} alt="logo" className="header-logo" onClick={redirectHome}/>
            <h1 className="header-title" onClick={redirectHome} >Roundtable</h1>
            <div className="search-container">
                <input type="text" className="header-searchbar" placeholder="Search" value={searchTerm} onChange={handleBarChange} />
                <select className="header-select" onChange={handleSelectChange} >
                    <option value="posts">Post</option>
                    <option value="subreddits">Subreddit</option>
                </select>
                <button className="header-search-button" onClick={submitButton} >Search</button>
            </div>
        </header>
    )
}