import { configureStore } from '@reduxjs/toolkit';
import redditPostsReducer from "../slices/redditPostsSlice";
import subredditsReducer from "../slices/subredditsSlice";

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
    subreddits: subredditsReducer
  },
});
