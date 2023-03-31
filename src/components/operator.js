import React, { useState } from "react"
import AndOp from "./andOp";
import ArgOp from "./argOp";
import ConstOp from "./constOp";
import SelectOp from "./selectOp";
import '../styles/opStyle.css';

const Operator = () => {

    const [opParam, setOpParam] = useState("select")

    const handleOp = (p) => {
        setOpParam(p)
    }

    var opView = <SelectOp onSelectOp={handleOp} />
    switch (opParam) {
        case 'const':
            opView = <ConstOp />;
            break;
        case 'arg':
            opView = <ArgOp />;
            break;
        case 'and':
            opView = <AndOp opValue={"and"}/>;
            break;
        case 'or':
            opView = <AndOp opValue={"or"}/>;
            break;
        default:
            opView = <SelectOp onSelectOp={handleOp} />;
    }

    return <div className="operator">
        <div>{opView}</div>
        <div><button type="button" onClick={handleOp}>x</button></div>

    </div>
}

export default Operator 