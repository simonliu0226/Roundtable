import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { getSubreddits, searchSubreddits } from "../api/reddit";

const initialState = {
    subreddits: []
}

const subredditsSlice = createSlice ({
    name: "subreddits",
    initialState,
    reducers: {
        setSubreddits: (state, action) => {
            state.subreddits = action.payload;
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
        const history = useHistory();
        const subreddits = await searchSubreddits(searchTerm);
        history.push("/searchResults");
        dispatch(setSubreddits(subreddits));
    } catch (err) {
        console.log(err);
    }
}


export const selectSubreddits = (state) => state.subreddits.subreddits;
export const { setSubreddits } = subredditsSlice.actions;
export default subredditsSlice.reducer;