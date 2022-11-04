import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const showNavbarSlice = createSlice({
  name: "showNavbar",
  initialState: {
    showNavbar: true,
  },
  reducers: {
    setShowNavbar(state, action: PayloadAction<boolean>) {
      state.showNavbar = action.payload;
    },
  },
});

export const { setShowNavbar } = showNavbarSlice.actions;
export default showNavbarSlice.reducer;
