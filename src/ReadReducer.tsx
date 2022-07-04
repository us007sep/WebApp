import { useSelector } from "react-redux"
import { AppState } from "./AppState"

export default function ReadReducer(){
    const textRed  = useSelector ((x:AppState) => x.textReducer);
    return <div>{textRed.name}</div>
}