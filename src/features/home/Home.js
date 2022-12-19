import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Post } from "../post/Post";
import { fetchPosts, selectPosts, selectSubreddit } from "../../slices/redditPostsSlice";
import "./home.css";

export const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const selectedSubreddit = useSelector(selectSubreddit);

    
    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);


    return (
        <div className="home">
            <h2 className="subreddit-name">{selectedSubreddit.slice(1, -1)}</h2>
            {posts.map(post => <Post header={post.title} author={post.author} score={post.score} num_comments={post.num_comments} created_epoch={post.created_utc} is_video={post.media} mediaURL={post.preview ? post.url : ""} embedHTML={post.media ? (post.media.oembed ? post.media.oembed.html: "") : ""} redditVideoURL={post.is_video ? post.media.reddit_video.fallback_url : ""} selftext={post.selftext}/>)}
        </div>
    )
}