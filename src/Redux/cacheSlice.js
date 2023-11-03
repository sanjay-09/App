import { createSlice } from "@reduxjs/toolkit";

const cacheSlice=createSlice({
    name:"cacheSlice",
    initialState:{

    },
    reducers:{
        cached:(state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }
})
export default cacheSlice.reducer;
export const{cached}=cacheSlice.actions;