"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme?: Theme;
  systemTheme?: Theme;
  themes?: string[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  resolvedTheme: "dark",
  systemTheme: "dark",
  themes: ["dark", "light"],
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: {
  children: React.ReactNode;
  defaultTheme?: string;
  attribute?: string;
  disableTransitionOnChange?: boolean;
  enableSystem?: boolean;
}) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || (defaultTheme as Theme) || "dark";
    setThemeState(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [defaultTheme]);

  const setTheme = (newTheme: string) => {
    const validTheme = newTheme === "light" ? "light" : "dark";
    setThemeState(validTheme);
    localStorage.setItem("theme", validTheme);
    if (validTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        resolvedTheme: theme,
        systemTheme: "dark",
        themes: ["dark", "light"],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
