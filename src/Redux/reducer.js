import { createReducer} from "@reduxjs/toolkit";

export const userReducer = createReducer({
    isvalid:false,
    card:null,
},(builder)=>{
    builder.addCase("card",(state,action)=>{
        state.card=action.payload;
        }).addCase("second",(state,action)=>{
            state.second=action.payload;
        })
    
});