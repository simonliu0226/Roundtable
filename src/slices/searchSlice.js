import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "",
    searchType: "posts"
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSearchType: (state, action) => {
            state.searchType = action.payload;
        }
    }
});

export const selectSearchType = (state) => state.search.searchType;
export const selectSearchTerm = (state) => state.search.searchTerm;
export const { setSearchTerm, setSearchType } = searchSlice.actions;
export default searchSlice.reducer;