import React, {useState} from "react"


const Argument = () => {
    const [textField,settextField] = useState("");
    const [boolVal,setBoolVal] = useState(false);

    return <div class="dropdown">
        <form>
            <input onChange={(e) => {settextField(e.target)}} type="text" id="fname" name="fname"></input>
            <select name='argument' id="myDropdown" class="dropdown-content">
                <option value='true'>true</option>
                <option value='false'>false</option>
            </select>
        </form>
    </div>
}

export default Argument 