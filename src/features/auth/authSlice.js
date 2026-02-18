import { createSlice } from "@reduxjs/toolkit";
import { mockUsers } from "../../data/mockUsers";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = mockUsers.find(
        u => u.email === email && u.password === password
      );
      if (user) {
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;