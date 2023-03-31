import React, { useState } from "react"

const SelectOp = ({onSelectOp}) => {
    const getInitialState = () => {
        const value = "select";
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
        onSelectOp(e.target.value);
    };

    return (
        <div>
            <select value={value} onChange={handleChange}>
                <option value='select'>select</option>
                <option value='const'>const</option>
                <option value='arg'>arg</option>
                <option value='and'>and</option>
                <option value='or'>or</option>
            </select>
        </div>
    );
}

export default SelectOp