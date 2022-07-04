import { useDispatch } from "react-redux"
import ReadReducer from "./ReadReducer";
import { write } from "./TextReducer";

export default function WriteReducer(){
    const disp = useDispatch();
    return(
        <>
        <input type="text" onChange={e => disp(write(e.target.value))}/>
        <ReadReducer/>
        </>
    )
}