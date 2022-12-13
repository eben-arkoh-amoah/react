
 import React, { useState , createContext } from "react";

export const ThemeContext = createContext({theme : `light` , setTheme: (theme)=>{}}) ;
export const SecondThemeContext = createContext({bodyTheme : `firstLight` , setBodyTheme: (bodyTheme)=>{}}) ;

 export function ThemeProvider({children}){
     const [theme , setTheme] = useState('light');
     const [bodyTheme , setBodyTheme] = useState('bodyLight');
 return(
     <ThemeContext.Provider value={{theme, setTheme , bodyTheme , setBodyTheme}}>
         {children}
     </ThemeContext.Provider>
 )
}

