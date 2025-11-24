import { createContext, useEffect, useState } from "react";
import useThemes from "../constants/Theme";
import useShadowStyles from "../constants/Shadow";
import useTextStyles from "../constants/Text";
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setNewTheme] = useState("dark");
  const [themes, _] = useState(useThemes ?? {});
  const [eminence, __] = useState(useShadowStyles ?? {});
  const [useText, ___] = useState(useTextStyles);

  const setThemeToLocalStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const setTheme = (newTheme) => {
    setThemeToLocalStorage(newTheme);
    setNewTheme(newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setThemeToLocalStorage(theme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themes,
        setTheme,
        eminence,
        useText,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
