//Ajax Calls

import { useEffect, useState } from "react";

// AJAX is a developer's dream, because you can:

// Update a web page without reloading the page
// Request data from a server - after the page has loaded
// Receive data from a server - after the page has loaded
// Send data to a server - in the background

//Ajax Once (Order at Swiggy needs to be saved at last once) && Ajax Multiple (While searching, multiple ajax calls are needed to made after each letter)

export default function UseEffectOnce(){
    const [title,setTitle] = useState("");

    //useEffect(()=>{}, []) Second parameter as empty array signifies it to get use only once during a component's life cycle
    //useEffect(()=>{}, [something]) When you give something in second argument, whenever something changes the useEffect gets invoked
    useEffect(() => {
        async function api(){
            const resp  = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
            const obj = await resp.json();
            const title= obj.title;
            setTitle(title);
        }
        api();
    },[]);
    return(
        <div>{title}</div>
    )
}