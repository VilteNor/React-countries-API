import CountryListItem from "./CountryListItem";

const CountriesList = ({countriesList}) => {
    return(
        <>
        <section>{
       
            countriesList.map((country,index) => {
                return <CountryListItem key={index}
                countryName={country.countryName}
                
                />
            })
          
        }</section>
        </>
    );
}

export default CountriesList;
