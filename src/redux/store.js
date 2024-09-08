import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./register-slice";

const store = configureStore({
  reducer: {
    register: registerSlice,
  },
});

export { store };
