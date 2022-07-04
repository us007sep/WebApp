import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";


export default function SimpleState(){
    const [count , inc_cnt]= useState<number>(0);
    const his=useNavigate();

    
    return (
    <>
    <MyButton label={count.toString()} onclick = {()=> inc_cnt(count+1)} />
    <button onClick={()=>his("/RouteA/Virat")}>Go to Virat</button>
    </>
    )    
}