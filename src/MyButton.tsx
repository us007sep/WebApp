import "./MyButton.css";

interface Iprops{
    label:string; 
    onclick : () => void;
}

export default function MyButton(props:Iprops){
    const OnButtonClick = () => {
        props.onclick();       
    }
    return(
        <button className="butt" onClick={OnButtonClick}>{props.label}</button>
    );
}