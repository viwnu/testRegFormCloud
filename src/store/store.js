import { configureStore } from '@reduxjs/toolkit'

import userInfoReducer from './userInfoSlice'

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
//   preloadedState: persistedState,

})

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store