import { useEffect, useState } from "react";
import "./App.css";

interface User{
    id:number;
    email : string;
    first_name : string;
    last_name : string;
    avatar : string;
}

export default function DisplayPerson(){
    const [Users,setUser] = useState<User[]>([]);
    const [search , setSearch] = useState<string>("");
    useEffect(()=>{
        async function display(){
            const resp = await fetch("https://reqres.in/api/users");
            const obj = await resp.json();
            setUser(obj.data);
        }
        display();
    },[])

    const filtercriteria = (user:User) =>{
        const name = [user.first_name.toLowerCase() , user.last_name.toLowerCase()];
        // return name.includes(search.toLowerCase()); This will only search when exact name is typed
        // Therefore we need to do string search instead of array search
        return name.some(x=>x.includes(search.toLowerCase()));
    }
    return (
        <>
        <input type="text" onChange={e=>setSearch(e.target.value)}/>
        <div className="grid-container">
        {/* Map is used to convert the objects like JS Object to a HTML Cope */}
            {Users.filter(filtercriteria).map(renderUser)}   
        </div>
        </>
    )
}

function renderUser(user:User , idx:number){
    return(
         <div key={idx}>
             <img src={user.avatar} alt={user.first_name}/>
             <div>{user.first_name + " " + user.last_name} </div>
             <div>{user.email}</div>
             <br></br>
         </div>
    )
}