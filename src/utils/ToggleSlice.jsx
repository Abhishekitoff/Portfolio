import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const ToggleSlice = createSlice({
  name: 'toggleHandler',
  initialState,
  reducers: {
    switchLight: (state) => {
      state.value = !state.value
      console.log(state.value);
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { switchLight } = ToggleSlice.actions

export default ToggleSlice.reducer