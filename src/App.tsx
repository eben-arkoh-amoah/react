import React, {useContext} from 'react';
import { MainRoutes } from './Routes/MainRoutes';
import { Header } from './Components/Header';
import { CountriesContext } from './context/countriesContextProvider';
import { ThemeProvider } from './context/themeContextProvider';
import { ThemeContext } from './context/themeContextProvider';
import Styles from "./styles/componentStyles/style.module.css";




function App() {
  return (
 <CountriesContext>
 <ThemeProvider>
  <Container>
  <Header/>
    <MainRoutes/>
    </Container>      
   </ThemeProvider>
 </CountriesContext>
  );
}

function Container ({children}:any) {
  const {theme , setTheme} = useContext(ThemeContext);
 return ( 
 <div className={`${Styles[theme]} ${Styles.container}`}>
  {children}
  </div>
  )
}

export default App;
