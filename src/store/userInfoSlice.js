import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    value: {}
  },
  reducers: {
    addInfo: (state, action) => {
        const addingInfo = action.payload
        state.value = {...state.value, ...addingInfo}
    }
  },
})

export const { addInfo } = userInfoSlice.actions

export default userInfoSlice.reducer