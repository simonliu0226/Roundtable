import { createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts, searchPosts } from "../api/reddit";

const initialState = {
    posts: [],
    searchedPosts: [],
    selectedSubreddit: "/r/pics/"
}

const redditPostsSlice = createSlice({
    name: "redditPosts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSearchedPosts: (state, action) => {
            state.searchedPosts = action.payload;
        },
        setSelectedSubreddit: (state, action) => {
            if (action.payload) {
                state.selectedSubreddit = action.payload;
            }
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

export const fetchSearchedPosts = (searchTerm) => async (dispatch) => {
    try {
        const posts = await searchPosts(searchTerm);
        dispatch(setSearchedPosts(posts));
    } catch (err) {
        console.log(err);
    }
}


export const selectPosts = (state) => state.redditPosts.posts;
export const selectSearchedPosts = (state) => state.redditPosts.searchedPosts;
export const selectSubreddit = (state) => state.redditPosts.selectedSubreddit;
export const { setPosts, setSearchedPosts, setSelectedSubreddit } = redditPostsSlice.actions;
export default redditPostsSlice.reducer;