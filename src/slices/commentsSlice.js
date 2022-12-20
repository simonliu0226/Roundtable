import { createSlice } from "@reduxjs/toolkit"
import { getPostComments } from "../api/reddit";

const initialState = {
    postData: {},
    comments: []
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setPostData: (state, action) => {
            state.postData = action.payload;
            console.log(state.postData);
        },
        setComments: (state, action) => {
            state.comments = action.payload;
            console.log(state.comments);
        }
    }
});

export const fetchComments = (permalink) => async (dispatch) => {
    try {
        const comments = await getPostComments(permalink);
        dispatch(setComments(comments));
    } catch (err) {
        console.log(err);
    }
}

export const selectComments = (state) => state.comments.comments;
export const selectPostData = (state) => state.comments.postData;
export const { setPostData, setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
