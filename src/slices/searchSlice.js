import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchType: "post"
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchType = action.payload;
        }
    }
});

export const selectSearchType = (state) => state.search.searchType;
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;