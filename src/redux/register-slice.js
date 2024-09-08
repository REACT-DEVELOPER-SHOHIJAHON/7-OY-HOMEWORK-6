import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("users")) || [],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.payload];

      localStorage.setItem("users", JSON.stringify(state.user));
    },
  },
});

export const { addUser } = registerSlice.actions;
export default registerSlice.reducer;
