import { Fab, makeStyles, TextField, Typography } from "@material-ui/core"
import firebase from "firebase";
import { useContext, useState } from "react";
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
    },
    errorMsg:{
        color:'red',
    }
})

interface Iprop{
    email:string;
    currentPassword: string;
    newPassword:string,
    confirmNewPassword:string
}


export default function PasswordChange(){
    const style = usestyl();
    const {register,reset,handleSubmit} = useForm<Iprop>();
    const [error,setError] = useState<string>("");
    const User  = useContext(_userContext);    
    const hist=useNavigate();

    async function setPassword (prop:Iprop){
        if(prop.newPassword !== prop.confirmNewPassword) {
            setError("New Passwords do not match");
            return;
        }
        try{
            await firebase.auth().signInWithEmailAndPassword(prop.email,prop.currentPassword);
            try{
                await User?.updatePassword(prop.currentPassword);
                setError("Password Changed");
                return;
            }catch(e:any){
                setError(e.message);
                return;
            }
        } catch(e:any){
            setError(e.message);
        }
    };

    return(
        <div className={style.container1}>
                <form className={style.container2}>
                <Typography variant="h4">Enter your Credentials</Typography>    
                <TextField type={"email"} placeholder="E-Mail" variant="outlined" {...register("email")}></TextField>
                <TextField type={"password"} placeholder="Current Password" variant="outlined" {...register("currentPassword")}></TextField>
                <TextField type={"password"} placeholder="New Password" variant="outlined" {...register("newPassword")}></TextField>
                <TextField type={"password"} placeholder="Confirm New Password" variant="outlined" {...register("confirmNewPassword")}></TextField>
                <div className={style.buttons}>
                    <Fab color="secondary" variant="extended" onClick={()=>reset()}>Reset Form</Fab>
                     <Fab color="primary" variant="extended" onClick={handleSubmit(setPassword)} >Change Password</Fab>
                     <Fab color="default" variant="extended" onClick={()=>{hist("/Profile")}} >Go Back to Profile</Fab>
                </div>
                    {error && <Typography variant="body1" className={style.errorMsg}>{error}</Typography>}
                </form> 
        </div>
    )
}