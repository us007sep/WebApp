import { Card, CardActionArea, CardContent, CardMedia, Fab, makeStyles, Typography } from "@material-ui/core";
import { AddAPhoto, Photo } from "@material-ui/icons";
import { on } from "cluster";
import firebase from "firebase";
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { _userContext } from "./UserContext"

const usestyl = makeStyles({
    container1:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    container2:{
        display:'flex',
        flexDirection:'column',
        gap:'10px',
    },
    buttons:{
        display:'flex',
        justifyContent:'flex-end',
        gap:15,
        margin:'10px'
    },
    container3:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:15
    },
    errorMsg:{
        color:'red',
    }
})

export default function Profile(){
    const style= usestyl();
    const usercont = useContext(_userContext);
    const hist = useNavigate();
    const onSignOut=()=>{
        firebase.auth().signOut();
        hist("/Home");
    }

    const userCont = useContext(_userContext);
    const userExist = userCont && userCont.uid;

    //If user is logged out then display error message and sign up buttons
    if(!userExist) return(

            <div className={style.container3}>
            <div >
            <Typography variant="h5" className={style.errorMsg}>You have been logged out</Typography>
            </div>
            <div className={style.buttons}>
            <Fab variant="extended" color="primary" onClick={()=> hist("/Home")}>Home</Fab>
            <Fab variant="extended" color="secondary" onClick={()=> hist("/SignUp")}>Sign Up</Fab>
            <Fab variant="extended" color="inherit" onClick={()=> hist("/Login")}>Login</Fab>
            </div>
        </div>
    )

    return(
        <>
        <div className={style.container1}>
            <div className={style.container2}>

            <Typography variant="h4">My Profile</Typography>

            
            
            <Card >
                <CardActionArea>
                    {userCont?.photoURL && <CardMedia component="img" image={userCont?.photoURL!} alt="Name" />}
                    <CardContent>
                    <Typography variant="h5">{usercont?.displayName}</Typography>
                    <Typography variant="h5">{usercont?.email}</Typography>
                    <Typography variant="h5">{usercont?.uid}</Typography>

                    </CardContent>
                </CardActionArea>
            </Card>


            <div className={style.buttons}>
            <Fab color="primary" variant="extended" onClick={()=>{hist("/DPChange")}} >
                <AddAPhoto> </AddAPhoto>
            </Fab>
            <Fab color="secondary" variant="extended" onClick={()=>{hist("/PasswordChange")}}>Change Password</Fab>    
            <Fab color="primary" variant="extended" onClick={onSignOut}>Sign Out</Fab>
            <Fab color="secondary" variant="extended" onClick={()=>hist("/Home")}>Home</Fab>
            </div>    
            </div>
        </div>
        
        </>
    )
}

// Password Change
// Profile Photo