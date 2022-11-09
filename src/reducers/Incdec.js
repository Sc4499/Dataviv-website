import { createReducer } from "@reduxjs/toolkit";
const initialState = {
      counter : 0
  }
export const customReducer = createReducer(initialState,{

    INCREMENT : (state,action)=>{
state.counter+=1;
    },
    DECREMENT : (state,action)=>{
        state.counter -= 1;
            },

            BYVALUE : (state,action)=>{
                state.counter+=action.payload;
                    }
})