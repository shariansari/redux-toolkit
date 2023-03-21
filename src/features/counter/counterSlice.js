import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialStatevalue = {
  count: 56,
  query: 'Nature',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStatevalue,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    getData: (state, action) => {
      const request = axios
        .get(`https://www.pexels/api/search`)
        .then((res) => res.data)
// cors issue...find on internet
      console.log(request)
    },
  },
})

export const {
  increment,
  decrement,
  incrementByAmount,
  getData,
} = counterSlice.actions

export default counterSlice.reducer
