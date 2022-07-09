import { Fab, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

interface Title{
    title:string;
    showSignUp?:boolean;
    showLogin?:boolean;
    showfname?:boolean;
    showlname?:boolean;
    onSubmitClick:(email:string,password:string,displayName?:string)=> Promise<string>;
}

interface IAuthentication{
    fname:string;
    lname:string;
    email:string;
    password:string;
}

const useStyle = makeStyles({
    parent_container:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        gap: 15,
        width:'30%'
    },

    buttons:{
        display:'flex',
        justifyContent:'flex-end',
        gap:10
    },
    title:{
        display:'flex',
        justifyContent:'center',
    },
    errorMsg:{
        color:'red',
    }
})


export default function Authentication(props : Title){
    const {register,reset,handleSubmit,formState} = useForm<IAuthentication>();
    const style = useStyle();
    const [Spinner,SetSpinner]=useState<boolean>(false);
    const [error, seterror]=useState<string>("");
    async function onSubmit (data:IAuthentication){
            SetSpinner(true);
            const message  = await props.onSubmitClick(data.email,data.password,data.fname);
            SetSpinner(false);  
            if(message) {
                seterror(message);
            }
            else{
                history("/Home");
            }
    }
    const history = useNavigate();
    return(
        <div className={style.parent_container}>
        <form className={style.container}>
        <Typography variant="h4" className={style.title}> {props.title}  </Typography>
        {props.showfname&&<TextField placeholder="First Name" variant="outlined" {...register("fname" , {
            required: {value:true, message:"Name is a required field"},
            minLength: {value:4, message:"Min length is 4"}},
        )}
            error={formState.errors?.fname !== undefined}
            helperText={formState.errors?.fname?.message}
        />}
        {props.showlname&&<TextField placeholder="Last Name" variant="outlined" {...register("lname" , 
            {required: {value:true, message:"Name is a required field"}}
        )}
            error={formState.errors?.lname !== undefined}
            helperText={formState.errors?.lname?.message}
        />}
        <TextField type={"email"} placeholder="E-Mail" variant="outlined" {...register("email" , 
            // Check regex for the code in pattern
            {pattern: {value: /[\w.]+@\w+\.[\w.]+/, message:"Invalid-Email"},       //Pattern is written inside slashes as in / /
            required: {value:true, message:"E-Mail is a required field"}}
        )}
            error={formState.errors?.email !== undefined}
            helperText={formState.errors?.email?.message}
        />
        <TextField type="password" placeholder="Password" variant="outlined" {...register("password",
            {required: {value:true, message:"Password is a required field"}}
        )}
            error={formState.errors?.password !== undefined}
            helperText={formState.errors?.password?.message}
        />

        <div className={style.buttons}>
            <Fab type="submit" color="primary" variant="extended" onClick={handleSubmit(onSubmit)}>Submit</Fab>
            <Fab color="secondary" variant="extended" onClick={()=>reset()}>Reset</Fab>
            <Fab variant="extended" onClick={()=> history("/Home")}>Home</Fab>
            {props.showLogin && <Fab variant="extended" onClick={()=> history("/Login")}>Login</Fab>}
            {props.showSignUp&&<Fab variant="extended" onClick={()=> history("/SignUp")}>Sign Up</Fab>}

        </div>          

            {Spinner && <LoadingSpinner backdropStatus={true}/>}
            {error && <Typography id="error" variant="body1" className={style.errorMsg}>{error}</Typography>}
       </form>
       </div>

        
    )
}