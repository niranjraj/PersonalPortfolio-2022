import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface CursorState {
  cursorText: string;
  cursorVariant:string;
theme:string;
loading:boolean;
}


const initialState: CursorState = {
 cursorText: "",
 cursorVariant: "default",
 theme:"light",
 loading:true,


}

export const cursorSlice = createSlice({
  name: 'cursorState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
   setCursorText: (state, action: PayloadAction<string>) => {
      state.cursorText = action.payload
    },
    setCursorVariant: (state, action: PayloadAction<string>) => {
      state.cursorVariant= action.payload
  
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme= action.payload
  
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading= action.payload
  
    },
  
   
   
  },
})

export const {   setCursorText,setCursorVariant,setTheme ,setLoading} = cursorSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCursorText = (state: RootState) => state.cursor.cursorText

export default cursorSlice.reducer