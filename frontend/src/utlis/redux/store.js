import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import storeSlice from './storeSlice'
import logger from 'redux-logger'



const store = configureStore({
    reducer:{
        user: userReducer,
        store:storeSlice,
       
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:true
        }
    })
   
})

export default store