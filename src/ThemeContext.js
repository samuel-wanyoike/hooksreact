import React, {createContext, useContext, useState } from "react";

//create context, one for darktheme state and other for toggle theme function 
const ThemeContext = createContext();
const ThemeToggleContext = createContext();


//custom hooks to expose the two context
export function useTheme() {
    return useContext(ThemeContext);
};

export function useThemeToggle() {
    return useContext(ThemeToggleContext);
};

// Theme provider
export function ThemeProvider ({children}) {

    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
    setDarkTheme(prev => !prev)
    };

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeToggleContext.Provider value={toggleTheme}>
                {children}
            </ThemeToggleContext.Provider>
        </ThemeContext.Provider>
    )
    
}