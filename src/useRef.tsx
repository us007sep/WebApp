// useRef is the alternate of document.getelementbyid()

import { useRef } from "react"

export default function UseRef(){
    const ref = useRef<HTMLInputElement>(null);

    const onClick = () => {
        alert(ref.current?.id! + ref.current?.value);
    }
    return (
        <>
        <input type="text" ref={ref} />
        <button onClick={onClick}>Submit</button>
        </>
    )
}