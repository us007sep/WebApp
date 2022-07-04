// Redux is a kind of database for react
// Setting up storage for redux
// Writing in redux         useDispatch
// Reading from redux       useSelector

import { combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import textReducer from "./TextReducer";
import UserReducer from "./UserReducer";
import hotelReducer from "./HotelReducer"

// Mention all the root reducers inside flower brackets
export const RootReducer = combineReducers({textReducer,UserReducer,hotelReducer});                  //Combining all the reducers , for now empty as we have no reducer

export type AppState =  ReturnType<typeof RootReducer>;             //Schema of Reducers...Used for reading data from reducer
/*
    Schema of Root Reducer is 
    {
        TextReducer : {name};
        UserReducer : { User1, User2, User3}
    }

*/

//Connection between react and redux
export const Store = configureStore({
    reducer:  RootReducer
})


