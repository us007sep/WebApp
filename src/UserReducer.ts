import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User{
    id:number;
    email : string;
    first_name : string;
    last_name : string;
    avatar : string;
}

const UserReducer = createSlice({
    name:"UserReducer",
    initialState:[] as User[],
    reducers:{
        write(_state:User[],action:PayloadAction<User[]>){
            return action.payload;          //Storing payload's action in state
        }
    }
})

export const {write} = UserReducer.actions;

export default UserReducer.reducer;