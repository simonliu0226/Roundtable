import { configureStore } from '@reduxjs/toolkit';
import redditPostsReducer from "../slices/redditPostsSlice";
import subredditsReducer from "../slices/subredditsSlice";
import commentsReducer from "../slices/commentsSlice";
import searchReducer from "../slices/searchSlice";

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
    search: searchReducer
  },
});
