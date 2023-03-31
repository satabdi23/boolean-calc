import React, { useState } from "react"
import Operator from "./operator";


const AndOp = ({opValue}) => {
    const [textField, settextField] = useState("");
    const [operator, setOperator] = useState([<Operator />,<Operator />]);


    function addOperand() {
        setOperator([...operator, <Operator />])
    }

    const [value, setValue] = useState(opValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return <div class="dropdown">
        <select value={value} onChange={handleChange}>
                <option value='and'>and</option>
                <option value='or'>or</option>
            </select>
        {operator}
        <button type="button" onClick={addOperand}>+ add op</button>
    </div>
}

export default AndOp 