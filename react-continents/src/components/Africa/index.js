import {useEffect, useState} from "react"

const Africa = () => {

    let [africaData, setAfricaData] = useState([])

    useEffect(() => {
        const url = "https://restcountries.com/v3.1/region/africa";
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setAfricaData(res)
            })
    }, []);

    return (
        <>
            <h1>
                Africa
            </h1>
            {africaData.map((country) => {
                    return <img src={country.flags.png} alt="image"/>
                }
            )}
        </>
    );
}

export default Africa;