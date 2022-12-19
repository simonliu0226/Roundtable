import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchSubreddits, selectSubreddits } from "../../slices/subredditsSlice";
import { setSelectedSubreddit } from "../../slices/redditPostsSlice";
import "./subreddits.css";

export const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [subreddits]);

    const handlePress = (e) => {
        console.log(e.target.value);
        dispatch(setSelectedSubreddit(e.target.value));
    }

    return (
        <div className="subreddits-container">
            <h3 className="subreddits-list-title">Subreddits:</h3>
            {subreddits.map(subreddit => <button value={`/${subreddit.display_name_prefixed}/`} onClick={handlePress} className="subreddit-button">{subreddit.display_name_prefixed}</button>)}
        </div>
    )
}