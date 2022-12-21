import { configureStore } from '@reduxjs/toolkit'
import timer from './timer/slice'

export const store = configureStore({
  reducer: {
    timer
  }
})
