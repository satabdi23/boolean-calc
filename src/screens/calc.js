import React, { useState } from "react"
import Argument from "../components/argument";
import Operator from "../components/operator";
import "../styles/style.css"

const Calc = () => {
    const [argument, setArguments] = useState([<Argument />]);

    function addArgument() {
        setArguments([...argument, <Argument />])
    }

    return <div class="calc">
        <form>
            {argument}
            <button type="button" onClick={addArgument}>+ add arg</button>
            <br/>
            <Operator />
            result:
        </form>
    </div>
}

export default Calc 