import { createContext, useState, useEffect, useContext } from "react";

// create a global resorvior where we can access the functionalities in this context.
const ThemeContext = createContext();



//Create a provider
const ThemeProvider = ({ children }) => {
  // step 1: set state to store theme (light / dark).
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  }); // Getting any saved theme initially we ensure that it's either truthy or falsy

  // step 2: Set function to change theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newTheme = !prevMode; // Switch theme
      localStorage.setItem("theme", newTheme ? "dark" : "light"); //saves the theme

      return newTheme;
    });
  };

  // step 3 apply the theme to html tag
  useEffect(() => {
    document.documentElement.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return(
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;

// custom hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if(!context) {
    throw new Error("`useTheme` must be used within a `UseTheme`")
  }
  return context;
}