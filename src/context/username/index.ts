import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "username",
  initialState: {
    username: "facebook",
  },
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
