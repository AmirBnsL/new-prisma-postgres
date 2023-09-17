import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/Counters/counterSlice";

 
export const store = configureStore({

    reducer:{
        counter:counterReducer,

    }
});


 