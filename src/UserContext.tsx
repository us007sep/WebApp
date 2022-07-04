import { createContext, useEffect, useState } from "react"
import firebase from "firebase";
import LoadingSpinner from "./LoadingSpinner";

interface Iuser{
    children : React.ReactNode;
}

export const UserContext = createContext <firebase.User | null> (null);

export default function SignIn(prop : Iuser){
    const [User,SetUser] = useState<firebase.User | null> (null);
    const [Spinner,SetSpinner]=useState<boolean>(true);
    useEffect(()=>{     
            firebase.auth().onAuthStateChanged((a: firebase.User | null)=>{
            SetSpinner(true);
            SetUser(a);
            SetSpinner(false);
        })
    },[])
    return(
        <>
        <UserContext.Provider value={User}>
            {!Spinner&&prop.children}
            {Spinner && <LoadingSpinner backdropStatus={false}/>}
        </UserContext.Provider>
        </>
    )
}