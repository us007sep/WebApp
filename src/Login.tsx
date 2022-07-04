import firebase from "firebase";
import Authentication from "./Authentication";

export default function Login(){
    async function onSubmitClick (email:string, password:string){
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password);
            return;
        } catch(e:any){
            return e.message;
        }
    };
    return(
        <Authentication title="Login" showSignUp={true} onSubmitClick={onSubmitClick}/>
    )
}