import { createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/reddit";

const initialState = {
    posts: [],
    selectedSubreddit: "/r/videos/"
}

const redditPostsSlice = createSlice({
    name: "redditPosts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSelectedSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        }
    }
});

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        const posts = await getSubredditPosts(subreddit);
        dispatch(setPosts(posts));
    } catch (err) {
        console.log(err);
    }
};


export const selectPosts = (state) => state.redditPosts.posts;
export const selectSubreddit = (state) => state.redditPosts.selectedSubreddit;
export const { setPosts, setSelectedSubreddit } = redditPostsSlice.actions;
export default redditPostsSlice.reducer;