import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getAppTheme } from "./theme";

const AppPreferencesContext = createContext({
  mode: "dark",
  toggleTheme: () => {},
  unit: "celsius",
  setUnit: () => {},
});

export function useAppPreferences() {
  return useContext(AppPreferencesContext);
}

export function useThemeMode() {
  const { mode, toggleTheme } = useAppPreferences();
  return { mode, toggleTheme };
}

export function useTemperatureUnit() {
  const { unit, setUnit } = useAppPreferences();
  return { unit, setUnit };
}

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("weatherAppTheme") || "dark",
  );
  const [unit, setUnitState] = useState(
    () => localStorage.getItem("weatherAppUnit") || "celsius",
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("weatherAppTheme", next);
      return next;
    });
  };

  const setUnit = (nextUnit) => {
    setUnitState(nextUnit);
    localStorage.setItem("weatherAppUnit", nextUnit);
  };

  return (
    <AppPreferencesContext.Provider value={{ mode, toggleTheme, unit, setUnit }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppPreferencesContext.Provider>
  );
}
