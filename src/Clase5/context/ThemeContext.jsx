import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarKMode] = useState(false);

    return <ThemeContext.Provider value={{isDarkMode, setIsDarKMode}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider