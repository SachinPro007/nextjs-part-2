const { configureStore } = require("@reduxjs/toolkit");
import counterSlice from "./slices/counterSlice"

export const store = configureStore({
  reducer: {
    counter : counterSlice
  }
})