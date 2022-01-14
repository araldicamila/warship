import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [chooseTheme, setChooseTheme] = useState("");

  const setTheme = (option) => {
    setChooseTheme(option);
  };

  return (
    <ThemeContext.Provider value={{ theme: chooseTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
