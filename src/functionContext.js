import React from "react";
import { useTheme, useThemeToggle } from "./ThemeContext";

export const FunctionContext = () => {
const darkTheme = useTheme();
const toggleTheme = useThemeToggle();



const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    margin: '2rem',
    padding: '2rem'
};

    return (
        <>
            <div style={themeStyles}>Function Toggle</div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}