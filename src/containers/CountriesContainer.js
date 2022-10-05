import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        fetch("https://restcountries.com/v3/all")
        .then((response)=>response.json())
        .then((response)=>setCountries(response.name.common));
        
    
        // fetch data from the RESTCountries API
        // set the countries state to the result of the API call
        // pass it down to relevant components
    }

    useEffect(() => {
        fetchCountries();
    }, [])


    return(
        <>
            <h1>I'm a country container!</h1>
            <CountriesList countriesList={countries}/>
            <VisitedCountriesList/>
        </>
    );
}

export default CountriesContainer;