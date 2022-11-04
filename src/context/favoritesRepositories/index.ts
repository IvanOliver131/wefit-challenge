import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favoritesRepositoriesSlice = createSlice({
  name: "favoritesRepositories",
  initialState: {
    favoritesRepositories: [],
  },
  reducers: {
    setFavoritesRepositories(state, action: PayloadAction<object[]>) {
      state.favoritesRepositories = action.payload;
    },
  },
});

export const { setFavoritesRepositories } = favoritesRepositoriesSlice.actions;
export default favoritesRepositoriesSlice.reducer;
