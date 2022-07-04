import { AppBar, Button, InputBase, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";
import { props } from "cypress/types/bluebird";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const useStyle = makeStyles({
    button:{
        color:'white'
    },
    searchContainer:{
        backgroundColor: 'rgba(255,255,255,0.45)',
        color: 'white',
        flexGrow : 1,
        display:'flex',
        alignItems:'center'
    },
    toolbar:{
        display:'flex',
        justifyContent:'space-between'
    },
    searchIcon:{
        margin:'0 10px',
    },
    searchBox:{
        color:'white',
        width:'100%'
    }

})

interface Iprops{
    searchHotel:string;
    setSearchString:( searchHotel:string ) => void;
}

export default function NavBar(prop:Iprops){
    const style = useStyle();
    const hist = useNavigate();
    const userCont = useContext(UserContext);
    const userExist = userCont && userCont.uid;
    return(
        <>
            <AppBar>
            <Toolbar className={style.toolbar}>
                <div className={style.searchContainer}>
                    <SearchIcon className={style.searchIcon}/>
                    <InputBase className={style.searchBox} placeholder="Search..." value={prop.searchHotel} 
                    onChange={(e)=>prop.setSearchString(e.target.value)}/>
                </div>
                <div>
                {!userExist && <Button className={style.button} onClick={()=>hist("/SignUp")}>SIGN UP</Button>}
                {!userExist && <Button className={style.button} onClick={()=>hist("/Login")}>LOGIN</Button>}
                {userExist && <Button className={style.button} onClick={()=>hist("/Profile")}>PROFILE</Button>}
                </div>
            </Toolbar>
            </AppBar>
        </>
    )
}