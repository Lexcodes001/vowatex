'use client';
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const isClientSide = () => typeof window !== 'undefined';

const getThemeFromStorage = () => {
  if (isClientSide()) {
    return window.localStorage.getItem('theme') || 'dark';
  }
  return 'dark';
};

const [theme, setTheme] = useState(getThemeFromStorage());
  const [mode, setMode] = useState('default');

  const handleThemeChange = (matches) => {
    const selectedTheme = matches ? "dark" : "light";
    setTheme(selectedTheme);
    setMode(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  useEffect(() => {

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event) => {
      handleThemeChange(event.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  useEffect(() => {
    const applyTheme = (selected) => {
      document.documentElement.setAttribute("color-scheme", selected);
      localStorage.setItem("theme", selected);
    };
    applyTheme(theme);
  }, [theme]);

  const changeTheme = (selected) => {
    if (selected === "default") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        // Theme set to dark.
        setTheme("dark");
        setMode('default');
      } else {
        // Theme set to light.
        setTheme("light");
        setMode('default');
      }
    } else {
      setTheme(selected);
      setMode(selected);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
