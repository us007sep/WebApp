import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    spinner:{
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    backdrop:{
        zIndex:1000,
    }
})

interface Iprops{
    backdropStatus:boolean
}

export default function LoadingSpinner(prop:Iprops){
    const style=useStyle();
    const renderSpinner=()=>{
        return(
        <div className={style.spinner}>
                <CircularProgress/>
        </div>
        )
    }
    if(prop.backdropStatus){
        <Backdrop open={true} className={style.backdrop}>
            {renderSpinner()}
        </Backdrop>
    }
    //Here below you can remove backdrop for effectiveness
    return (
        <Backdrop open={true} className={style.backdrop}>       
            {renderSpinner()}
        </Backdrop> 
    )
}