import {useForm} from "react-hook-form";

interface Istudent{
    name:string;
    email:string
    password: string;
}

export default function ReactHookFormsUI(){

    // Register is used to tie ReactHookForms with Interface
    const {register, handleSubmit,getValues, formState,reset} = useForm<Istudent>();

    const onsubmit=(data:Istudent)=>{
        alert(data.name + "--" + data.password);
        alert(getValues("name"));
    }
    return(
        <>
        <input type="text" placeholder="name" {...register("name" , 
            {required: {value:true, message:"Name is a required field"},
            minLength: {value:4, message:"Min length is 4"}}
        )}/>
        <br></br>
        <input type="email" placeholder="email" {...register("email" , 
            // Check regex for the code in pattern
            {pattern: {value: /[\w.]+@\w+\.[\w.]+/, message:"Invalid-Email"}}       //Pattern is written inside slashes as in / /
        )}></input>
        <br></br>
        <input type="password" placeholder="password"{...register("password")}/>
        <br></br>

        
        <button onClick={handleSubmit(onsubmit)}>Submit</button>
        <button onClick={()=>reset()}>Reset</button>
        {formState.errors?.name?.message&& <div>{formState.errors?.name?.message}</div>}
        {formState.errors?.email?.message&& <div>{formState.errors?.email?.message}</div>}
        {/* If message exists for short name then display the message */}
        </>
    )

}