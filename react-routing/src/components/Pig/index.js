import {useSearchParams} from "react-router-dom";

const Pig = () => {
    const [queries] = useSearchParams();
    const pigId = queries.get("id");

    return (
        <h1>Pig {!pigId ? 'unknown' : pigId}</h1>
    );
}

export default Pig;
