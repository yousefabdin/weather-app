import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function SearchBar({ setCity, erorrMessage }) {
  const [textValue, setTextValue] = useState("Amman");

  return (
    <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: 560 }, mx: "auto" }}>
      <TextField
        fullWidth
        placeholder="Search for a city..."
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        error={Boolean(erorrMessage)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setCity(textValue)}
                  aria-label="Search city"
                  sx={{
                    width: { xs: 40, sm: 44 },
                    height: { xs: 40, sm: 44 },
                    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 12px rgba(59,130,246,0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                    },
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              pl: { xs: 2, sm: 2.5 },
              pr: 1,
              borderRadius: "999px",
              backgroundColor: "background.paper",
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? "0 4px 20px rgba(0,0,0,0.3)"
                  : "0 4px 20px rgba(0,0,0,0.08)",
              "& fieldset": { border: "2px solid transparent", borderRadius: "999px" },
              "&:hover fieldset": { border: "2px solid rgba(59,130,246,0.4)" },
              "&.Mui-focused fieldset": { border: "2px solid #3B82F6" },
            },
          },
        }}
        sx={{
          "& .MuiInputBase-input": {
            fontSize: { xs: "0.95rem", sm: "1rem" },
            fontWeight: 500,
            py: { xs: 1.5, sm: 1.75 },
          },
        }}
      />

      {erorrMessage && (
        <Typography
          variant="body2"
          sx={{
            color: "#F87171",
            fontWeight: 500,
            textAlign: "center",
            mt: 1.5,
            px: 1,
            fontSize: { xs: "0.85rem", sm: "0.875rem" },
          }}
        >
          {erorrMessage}
        </Typography>
      )}
    </Box>
  );
}

export default SearchBar;
