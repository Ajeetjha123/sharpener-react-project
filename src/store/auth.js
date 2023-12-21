import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isAutehnticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAutehnticated = true;
    },
    logout(state) {
      state.isAutehnticated = false;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
