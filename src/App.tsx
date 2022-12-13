import React, {useContext} from 'react';
import { MainRoutes } from './Routes/routes';
import { Header } from './components/Header';
import { CountriesContext } from "./Context/countriesContextProvider";
import { ThemeProvider } from "./Context/themeContextProvider";
import { ThemeContext } from "./Context/themeContextProvider";
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
