import { useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSearchType } from "../../../slices/searchSlice";
import { selectSearchedPosts } from "../../../slices/redditPostsSlice";
import { selectSearchedSubreddits } from "../../../slices/subredditsSlice";
import { setSelectedSubreddit } from "../../../slices/redditPostsSlice";
import { useEffect } from "react";
import { Post } from "../../post/Post";
import "./searchResults.css";

export const SearchResults = () => {
    const searchType = useSelector(selectSearchType);
    const posts = useSelector(selectSearchedPosts);
    const subreddits = useSelector(selectSearchedSubreddits);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubredditButtonPress = (e) => {
        console.log(e.currentTarget.value);
        dispatch(setSelectedSubreddit(e.currentTarget.value));
        history.push("/");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [posts, subreddits]);


    if (searchType === "posts" && posts.length) {
        return (
            <div className="search-results-posts search-results">
                <h2 className="posts-title">Posts:</h2>
                {posts.map(post => <Post header={post.title} author={post.author} score={post.score} num_comments={post.num_comments} created_epoch={post.created_utc} is_video={post.media} mediaURL={post.preview ? post.url : ""} embedHTML={post.media ? (post.media.oembed ? post.media.oembed.html: "") : ""} redditVideoURL={post.is_video ? post.media.reddit_video.fallback_url : ""} selftext={post.selftext} permalink={post.permalink} />)}
            </div>
        )
    } else if (searchType === "subreddits" && subreddits.length) {
        return (
            <div className="search-results-subreddits search-results">
                <h2 className="subreddits-title">Subreddits:</h2>
                {subreddits.map(subreddit => <button value={"/" + subreddit.display_name_prefixed + "/"} onClick={handleSubredditButtonPress} className="subreddit-button"><h3>{subreddit.display_name_prefixed}</h3><p>{subreddit.public_description}</p></button>)}
            </div>
        )
    }

    history.push("/");
    return <></>;
}