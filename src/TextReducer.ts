import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Idata {
    name: string;
}

/*
    insert into table col1val , col2val
    state - current data of the table (name: '  ')

*/

/*
    React will invoke reducer
    write("GFG")
    GFG will be assigned to payloadAction

*/

const textReducer = createSlice({
    name: "textReducer",
    initialState: {name: '' } as Idata,
    reducers:{
        write(state:Idata,action :PayloadAction<string>){
            state.name = action.payload;
        },
        helloWrite(state:Idata,action :PayloadAction<string>){
            state.name = "hello" + action.payload;
        }
    }
});

export const {write,helloWrite} = textReducer.actions;
export default textReducer.reducer;