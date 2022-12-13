import { InputTs } from "../../Types/input";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContextProvider";
import Styles from "./styles.module.css"

export const InputArea = ({value, Search}: InputTs) => {
const {theme , setTheme} = useContext(ThemeContext);
    return(
        
        <section className={Styles.InputArea}>
            <input 
            type="text" className={`InputArea ${Styles[theme]}`} 
            placeholder="Search for a country..."
            value={value}
            onChange={e => Search(e.target.value)}/>
            <select className={`box--shadow ${Styles[theme]}`}  onChange={e => Search(e.target.value)}>
                <option value="Filter by region" defaultValue={"Filter by region"} disabled>Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <div className={`${Styles.searchIcon} ${Styles[theme]}`}>
                <div className={`${Styles.IconTail} ${Styles[theme]}`}></div>
            </div>
        </section>
    )
}