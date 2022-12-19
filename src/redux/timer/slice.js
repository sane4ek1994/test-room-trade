import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  seconds: 120
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setSeconds(state) {
      state.seconds -= 1
    }
  }
})

export const { setSeconds } = timerSlice.actions

export default timerSlice.reducer
