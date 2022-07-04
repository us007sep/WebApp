import { createContext, useState } from "react";
import { useStore } from "react-redux";
import ReadContext from "./ReadContext";


interface User{
    email: string;
}

export const UserContext = createContext<User>({email: ''});

export default function WriteContext(){
    const [email , setEmail]  = useState<string>('');
    return(
        <>
            <input type="text" onChange={e => setEmail(e.target.value)}/>
            <UserContext.Provider value = {{email:email}}>  
                {/*  UserContext.Provider is used to pass the argument to readcontext otherwise if there would have been more children in div email had to be passed at every line*/}
                {/* But incase some children don't need the arguments still it is getting */}
                {/* Therefore redux comes into play */}
                <ReadContext/>
            </UserContext.Provider>
        </>
    )
}