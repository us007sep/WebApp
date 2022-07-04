import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { User, write } from "./UserReducer";

export default function UserReducerUI(){
    const disp = useDispatch();
    const select = useSelector((x:AppState)=>x.UserReducer);
    useEffect(()=>{
        async function api(){
            const response = await fetch ("https://reqres.in/api/users");
            const obj: {data:User[]}= await response.json();
            disp(write(obj.data));
        }
        api();
    },[disp])
    return(
        <>
            {select.map(renderPerson)};
        </>
    )
}

function renderPerson(user:User , idx: number){
    return(
        <div key={idx}>
             <img src={user.avatar} alt={user.first_name}/>
             <div>{user.first_name + " " + user.last_name} </div>
             <div>{user.email}</div>
             <br></br>
         </div>
    )
}