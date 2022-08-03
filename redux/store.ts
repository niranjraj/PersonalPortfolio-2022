import { configureStore } from '@reduxjs/toolkit'
import CursorReducer from "./cursor-slice"
// ...
const store = configureStore({
  reducer: {
 cursor:CursorReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store