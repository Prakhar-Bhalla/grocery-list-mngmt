import { useState } from "react";
import "./GroceryInput.css";

export const GroceryInput = ({getData}) => {
    const [Text,setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const sendInput = () => {
        if(Text.length !== 0)
        {
            getData(Text);
        }
        else
        {
            alert("Invalid input");
        }
        setText("");
    }
    return <>
        <input value={Text} placeholder="Title" required onChange={handleChange}/>
        <button onClick={sendInput}>Click Here</button>
    </>
}