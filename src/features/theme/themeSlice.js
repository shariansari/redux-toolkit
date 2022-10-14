import { createSlice } from '@reduxjs/toolkit'

const initialStatevalue = {
  color: 0,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState:initialStatevalue,
  reducers: {
  
    changeTextColor: (state, action) => {
      state.color = action.payload
    },
  },
})


export const { changeTextColor} = themeSlice.actions

export default themeSlice.reducer