import {createSlice} from "@reduxjs/toolkit"
const navSlice=createSlice({
    name:"navSlice",
    initialState:{
        sideBar:true
    },
    reducers:{
        attach:(state)=>{
            if(state.sideBar){
                state.sideBar=false;
            }
            else{
                state.sideBar=true;
            }

        }
    }
})
export default navSlice.reducer;
export const{attach}=navSlice.actions;
