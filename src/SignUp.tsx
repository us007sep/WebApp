import Authentication from "./Authentication";
import firebase from "firebase";

export default function SignUp(){
    async function onSubmitClick(email:string, password:string, displayName?:string){
        try{
            const account = await firebase.auth().createUserWithEmailAndPassword(email,password);
            await account.user?.updateProfile({displayName});
            return;
        } catch(e:any){
            console.error(e);
            return e.message;
        }
    };
    return(
        <Authentication title="Sign Up" showLogin={true} showfname={true} showlname={true} onSubmitClick={onSubmitClick}/>
    )
}