import { configureStore } from '@reduxjs/toolkit';
import selectCoun from './counter';



export default configureStore({

    reducer:{
        
        counter:selectCoun
    }
})