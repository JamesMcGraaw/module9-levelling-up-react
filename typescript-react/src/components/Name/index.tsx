import NameProps from "./NameProps";
import {ReactElement} from "react";

const Name = ({nameStr}: NameProps): ReactElement => {
    return (
        <div>
            <p>Hello, {nameStr}!</p>
        </div>
    )
}

export default Name;