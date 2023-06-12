import {useEffect, useState} from "react"

const Asia = () => {

    let [asiaData, setAsiaData] = useState([])

    useEffect(() => {
        const url = "https://restcountries.com/v3.1/region/asia";
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setAsiaData(res)
            })
    }, []);

    return (
        <>
            <h1>
                Asia
            </h1>
            {asiaData.map((country) => {
                    return <img src={country.flags.png} alt="image"/>
                }
            )}
        </>
    );
}

export default Asia;