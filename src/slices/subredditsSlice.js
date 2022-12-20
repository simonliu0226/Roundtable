import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits, searchSubreddits } from "../api/reddit";

const initialState = {
    subreddits: [],
    searchedSubreddits: []
}

const subredditsSlice = createSlice ({
    name: "subreddits",
    initialState,
    reducers: {
        setSubreddits: (state, action) => {
            state.subreddits = action.payload;
        },
        setSearchedSubreddits: (state, action) => {
            state.searchedSubreddits = action.payload;
        }
    }
});

export const fetchSubreddits = () => async (dispatch) => {
    try {
        const subreddits = await getSubreddits();
        dispatch(setSubreddits(subreddits));
    } catch (err) {
        console.log(err);
    }
}

export const fetchSearchedSubreddits = (searchTerm) => async (dispatch) => {
    try {
        const subreddits = await searchSubreddits(searchTerm);
        if (!subreddits) return;
        dispatch(setSearchedSubreddits(subreddits));
    } catch (err) {
        console.log(err);
    }
}


export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectSearchedSubreddits = (state) => state.subreddits.searchedSubreddits;
export const { setSubreddits, setSearchedSubreddits } = subredditsSlice.actions;
export default subredditsSlice.reducer;