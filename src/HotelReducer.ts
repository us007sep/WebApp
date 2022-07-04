import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotel{
    featured_image:string,
    name:string,
    cuisines:string,
    id:string
}

interface IHotelResponse{
    isLoaded:boolean
    hotels:IHotel[]
}

const initialState:IHotelResponse = {
    isLoaded:false,
    hotels:[]

}

const hotelSlice = createSlice({
    name:"hotelSlice",
    initialState:initialState,
    reducers:{
        started(state:IHotelResponse){
            state.isLoaded = true;
        },
        completed(state:IHotelResponse,action:PayloadAction<IHotel[]>){
            state.isLoaded=false;
            state.hotels = action.payload;
        }
    }

})

export const {started,completed} = hotelSlice.actions;

export default hotelSlice.reducer;