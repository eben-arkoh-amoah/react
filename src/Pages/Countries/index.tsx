import  { useContext, useEffect, useState } from "react";
import { InputArea } from "../../Input";
import { AllCountriesData } from "../../Context/countriesContextProvider";
import { CountryItem } from "../../components/countryItem/countryItem";
import { Country } from "../../Types/countryData";

import "./styles.css";
import { ThemeContext } from "../../Context/themeContextProvider";


export const Countries = () => {
  
const {theme , setTheme} = useContext(ThemeContext);  
const countries = useContext(AllCountriesData);
  const [filtredCountries, setFiltredCountries] = useState<Country[]>(countries);
  const [search, setSearch] = useState("");

  useEffect(
    ()=>{
         const searchResult = countries.filter(country => 
          country.name.toLowerCase().includes(lowerSearch) || country.region.toLowerCase().includes(lowerSearch))
          setFiltredCountries(searchResult)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search,countries]);
 

  const lowerSearch = search.toLocaleLowerCase()

    return(
        <main className="main">
        <InputArea
        value={search}
        Search = {setSearch}
        />
        <div className="countries">

        { countries ?  ( filtredCountries.map((country,index)=> (
                  <CountryItem  country={country}  key={index}  />
                ))) : <div className="loading">Loading...</div>
           } 
        </div>
        </main>
    )
}