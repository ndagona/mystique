import { createContext, useEffect, useState } from "react";
import useThemes from "../constants/Theme";
import useShadowStyles from "../constants/Shadow";
import useTextStyles from "../constants/Text";
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [themes, _] = useState(useThemes ?? {});
  const [eminence, __] = useState(useShadowStyles ?? {});
  const [useText, ___] = useState(useTextStyles);

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
