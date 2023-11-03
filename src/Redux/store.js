import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";

const appStore=configureStore({
    reducer:{
        nav:navSlice,
        cache:cacheSlice,
        chat:chatSlice

    }
})
export default appStore;