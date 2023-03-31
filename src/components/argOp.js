import React, { useState } from "react"


const ArgOp = () => {
    const getInitialState = () => {
        const value = "select";
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
        onSelectOp(e.target.value);
    };

    return <div class="dropdown">
        <form>
            <select name='argument' id="myDropdown" class="dropdown-content">
                <option value='true'>true</option>
                <option value='false'>false</option>
            </select>
        </form>
    </div>
}

export default ArgOp 