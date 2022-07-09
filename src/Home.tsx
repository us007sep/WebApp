import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import HotelCard from "./HotelCard";
import { completed, IHotel, started } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";
import NavBar from "./NavBar";


const useStyle = makeStyles({
    grid:{
        marginTop:'60px'
    }
})

interface IFile{
    data:{hotel:IHotel[]}
}

export default function Home(){
    const style  = useStyle();
    const disp = useDispatch();
    const selec = useSelector((x:AppState ) => x.hotelReducer);
    const [searchHotel , setSearchHotel]= useState<string>('');
    useEffect(()=>{ 
        async function api(){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var graphql = JSON.stringify({
            query: "{\n    hotel{\n        name,\n        cuisines,\n        id,\n        featured_image\n    }\n}",
            variables: {}
            })
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql
            };
            
            const response = await fetch("https://afternoon-harbor-64523.herokuapp.com/graphql", requestOptions);
            const obj :IFile=await response.json(); 
            disp(completed(obj.data.hotel));
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

