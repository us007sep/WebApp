import { useEffect, useState } from "react";
import { useStore } from "react-redux";

export default function UseEffectMultiple(){
    const [idx, setIdx] = useState<number>(1);
    const [title, setTitle] = useState<string>("");

    useEffect(()=>{
        async function api(){
            const resp = await fetch ("https://jsonplaceholder.typicode.com/todos/" + idx);
            const obj = await resp.json();
            setTitle(obj.title);


        }
        api();

    },[idx]);
    return(
        <>
            <input type="text" onChange={(e) => setIdx(parseInt(e.target.value))}/>
            <div>{title}</div>
        </>
    )

}