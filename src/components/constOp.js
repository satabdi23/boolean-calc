import React, { useState } from "react"


const ConstOp = () => {
    const [textField, settextField] = useState("");
    const [dropDown, setdropDown] = useState(false);

    return <div class="dropdown">
        <form>
            <select name='argument' id="myDropdown" class="dropdown-content">
                <option value='true'>true</option>
                <option value='false'>false</option>
            </select>
        </form>
    </div>
}

export default ConstOp 