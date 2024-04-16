import { configureStore } from '@reduxjs/toolkit'
import toggleHandler from './ToggleSlice'
export const store = configureStore({
  reducer: {
    toggle: toggleHandler,
  },
})