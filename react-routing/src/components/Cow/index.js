import {useParams} from "react-router-dom";

const Index = () => {
    const {name} = useParams();
    return (
        <h1>Cow {name}</h1>
    );
}

export default Index;