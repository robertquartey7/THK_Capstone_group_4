import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import storeSlice from './storeSlice'
import orderSlice from './orderSlice'
import logger from 'redux-logger'



const store = configureStore({
    reducer:{
        user: userReducer,
        store:storeSlice,
        order:orderSlice
       
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:true
        }
    })
   
})

export default store