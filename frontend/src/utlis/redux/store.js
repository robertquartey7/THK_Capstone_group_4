import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import storeSlice from './storeSlice'



const store = configureStore({
    reducer:{
        user: userReducer,
        store:storeSlice,
       
        
        
    }
})

export default store