import { Fab, makeStyles, TextField, Typography } from "@material-ui/core";
import { Photo } from "@material-ui/icons";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { _userContext } from "./UserContext";

const usestyl = makeStyles({
    container1:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    container2:{
        display:'flex',
        flexDirection:'column',
        gap : 15,
        width:'50%',
    },
    buttons:{
        display:'flex',
        flexDirection:'row',
        gap:15,
        justifyContent:'flex-end'
    }
})

interface Iprop{
    photo : string;
}

export default function DPChange(){
    const {register,reset,handleSubmit} = useForm<Iprop>();
    const style= usestyl();
    const userCont = useContext(_userContext);
    const hist = useNavigate();
    const setdp = (prop:Iprop) => {
        userCont?.updateProfile({photoURL:prop.photo});
        hist("/Profile");
    }
   
    return(
        
            <div className={style.container1}>
                <form className={style.container2}>
                <TextField placeholder="Photo URL" variant="outlined" {...register("photo")}></TextField>
                <div className={style.buttons}>
                    <Fab color="secondary" variant="extended" onClick={()=>reset()}>Reset Link</Fab>
                     <Fab color="primary" variant="extended" onClick={handleSubmit(setdp)}>Change DP</Fab>
                </div>
                </form> 
            </div>
    )
}