import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => localStorage.getItem("sks-theme") === "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("sks-theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme: () => setDark(v => !v) }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() { return useContext(ThemeContext); }
