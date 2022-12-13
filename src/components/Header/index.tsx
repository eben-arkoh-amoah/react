import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContextProvider";
import  Styles from "./styles.module.css";
export const Header = () => {

const {theme , setTheme} = useContext(ThemeContext);


    return(
        <div className={Styles[theme]}>
          <header className={`${Styles.header}`}>
          <h1 className="welcome-text">Where in the world?</h1>
          <p onClick={()=>{
            setTheme(theme ==='light' ? 'dark' : 'light');
          }}>
           <p className={`${Styles.themeIcon}`}><span className={Styles[theme]}></span></p>
          <span>Dark Mode</span>
          </p>
        </header>
        </div>
    )
}

