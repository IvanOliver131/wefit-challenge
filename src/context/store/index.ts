import { configureStore } from "@reduxjs/toolkit";

import favoritesRepositoriesReducer from "../favoritesRepositories";
import usernameReducer from "../username";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    favoritesRepositories: favoritesRepositoriesReducer,
  },
});
