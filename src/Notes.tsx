import { useState } from "react";

export default function Notes(){
    const [Notes, setlist] = useState<string[]>([]);
    const [CurrentNote , setnote] = useState<string>("");
    const updateNotes = () =>{
        setlist([...Notes,CurrentNote]);
    }

    const deleteNote=(idx:number)=>{
        const clone = [...Notes];
        setlist(clone.filter((_x,i)=>i!==idx));
    }

    const renderitem=(name:string , idx : number)=>{
        return (
            <li key={idx}>
                <div>{name}</div>
                <button onClick={()=>deleteNote(idx)}>Delete Note</button>
            </li>
        )
    }

    return(
        <>
            <input type="text" onChange={(e)=> setnote(e.target.value)} />
            <button onClick={updateNotes}>Add Note</button>
            <ul>
                {Notes.map(renderitem)}
            </ul>
        </>
    )
}