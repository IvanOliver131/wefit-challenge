import { configureStore } from "@reduxjs/toolkit";

import usernameReducer from "../username";
import favoritesRepositoriesReducer from "../favoritesRepositories";
import showNavbarReducer from "../showNavbar";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    favoritesRepositories: favoritesRepositoriesReducer,
    showNavbar: showNavbarReducer,
  },
});
