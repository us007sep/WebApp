import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import HotelCard from "./HotelCard";
import HotelReducer, { completed, IHotel, started } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";
import NavBar from "./NavBar";


const useStyle = makeStyles({
    grid:{
        marginTop:'60px'
    }
})

interface IFile{
    restaurant :IHotel
}

export default function Home(){
    const style  = useStyle();
    const disp = useDispatch();
    const selec = useSelector((x:AppState ) => x.hotelReducer);
    const [searchHotel , setSearchHotel]= useState<string>('');
    useEffect(()=>{ 
        async function api(){
            const response = await fetch("/hotel.json");
            const obj :IFile[]=await response.json(); 
            disp(completed(obj.map(x => x.restaurant)));
        }
        disp(started());
        api();
    },[disp]);

    return (
        <>
            <NavBar searchHotel={searchHotel} setSearchString={setSearchHotel}/>
            {selec.isLoaded && <LoadingSpinner backdropStatus={true}/>}
            <Grid container spacing={5} className={style.grid}>
                {!selec.isLoaded && selec.hotels.filter(x=> x.name.toLowerCase().includes(searchHotel.toLowerCase())).map(x=><Grid item>
                    <HotelCard{...x}/></Grid>)}
            </Grid>
        </>
    )
}

