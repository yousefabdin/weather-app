import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode = "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#3B82F6",
        light: "#7DD3FC",
        dark: "#2563EB",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#FACC15",
        contrastText: "#111827",
      },
      background: {
        default: mode === "dark" ? "#0F172A" : "#F8FAFC",
        paper: mode === "dark" ? "#1E293B" : "#FFFFFF",
      },
      text: {
        primary: mode === "dark" ? "#F1F5F9" : "#111827",
        secondary: mode === "dark" ? "#94A3B8" : "#6B7280",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
      borderRadius: 16,
    },
  });

// Keep default export for backward compatibility
export const appTheme = getAppTheme("dark");
