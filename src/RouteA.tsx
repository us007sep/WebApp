import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

export default function RouteA(){
    const obj = useParams <{name:string}>();
    const his = useNavigate();
    
    // Below return block is the html tag which will get written inside root and needs to be in a single division therefore use <> </>  
    
    return(
        <>
        <div> { 'Hello ' + obj.name} </div>
        <button onClick={()=> his(-1)}>Go Back</button>
        </>
    )
}