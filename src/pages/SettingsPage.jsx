import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Paper,
  Snackbar,
  Stack,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  LocationOn,
  Code,
  Speed,
  Api,
  Storage,
  InfoOutlined,
} from "@mui/icons-material";
import { useThemeMode, useTemperatureUnit } from "../theme/ThemeModeProvider";
import getUserLocation from "../utils/getLocation";

const techStack = [
  { name: "React", icon: <Code /> },
  { name: "Material UI", icon: <Code /> },
  { name: "Vite", icon: <Speed /> },
  { name: "Open-Meteo API", icon: <Api /> },
];

function SettingsSection({ title, subtitle, children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, sm: 3, md: 4 },
        borderRadius: 4,
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.05)"
            : "rgba(0,0,0,0.03)",
        border: (theme) =>
          `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.12)"
              : "rgba(0,0,0,0.08)"
          }`,
        backdropFilter: "blur(12px)",
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            mt: 0.5,
            mb: 2.5,
            color: "text.secondary",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          {subtitle}
        </Typography>
      )}
      {!subtitle && <Box sx={{ mb: 2.5 }} />}
      {children}
    </Paper>
  );
}

export default function SettingsPage() {
  const { mode, toggleTheme } = useThemeMode();
  const { unit, setUnit } = useTemperatureUnit();
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleUnitChange = (_, value) => {
    if (value) {
      setUnit(value);
    }
  };

  const handleCurrentLocation = async () => {
    try {
      const { latitude, longitude } = await getUserLocation();
      setSnackbar({
        open: true,
        message: `Location detected: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
      });
    } catch {
      setSnackbar({
        open: true,
        message:
          "Unable to access your location. Please check browser permissions.",
      });
    }
  };

  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Box
        sx={{ position: "relative", overflow: "hidden", py: { xs: 6, md: 10 } }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Chip
              label="Preferences"
              color="primary"
              sx={{ fontWeight: 600, borderRadius: "999px", mb: 2 }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.75rem" },
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              Settings
            </Typography>
            <Typography
              sx={{
                mt: 2,
                mx: "auto",
                maxWidth: 560,
                color: "text.secondary",
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                lineHeight: 1.8,
                px: { xs: 1, sm: 0 },
              }}
            >
              Customize your WeatherApp experience. Manage appearance, units,
              and app information.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={3}>
          <SettingsSection
            title="APPEARANCE"
            subtitle="Switch between dark and light mode."
          >
            <FormControlLabel
              control={
                <Switch
                  checked={mode === "dark"}
                  onChange={toggleTheme}
                  color="primary"
                />
              }
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  {mode === "dark" ? (
                    <DarkMode fontSize="small" />
                  ) : (
                    <LightMode fontSize="small" />
                  )}
                  <Typography fontWeight={600}>
                    {mode === "dark" ? "Dark Mode" : "Light Mode"}
                  </Typography>
                </Stack>
              }
              sx={{
                ml: 0,
                width: "100%",
                justifyContent: "space-between",
                m: 0,
              }}
              labelPlacement="start"
            />
          </SettingsSection>

          <SettingsSection
            title="APPLICATION"
            subtitle="Choose your preferred temperature unit."
          >
            <FormControl fullWidth>
              <ToggleButtonGroup
                value={unit}
                exclusive
                onChange={handleUnitChange}
                fullWidth
                sx={{
                  "& .MuiToggleButton-root": {
                    py: 1.25,
                    fontWeight: 600,
                    textTransform: "none",
                    flex: 1,
                  },
                }}
              >
                <ToggleButton value="celsius">Celsius (°C)</ToggleButton>
                <ToggleButton value="fahrenheit">Fahrenheit (°F)</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </SettingsSection>

          <SettingsSection
            title="LOCATION"
            subtitle="Use your device location to fetch nearby weather."
          >
            <Button
              variant="contained"
              startIcon={<LocationOn />}
              onClick={handleCurrentLocation}
              fullWidth
              sx={{
                py: 1.25,
                borderRadius: 3,
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Use Current Location
            </Button>
          </SettingsSection>

          <SettingsSection title="ABOUT">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
                gap: 2,
              }}
            >
              {techStack.map((tech) => (
                <Card
                  key={tech.name}
                  sx={{
                    borderRadius: 3,
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(255,255,255,0.9)",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "translateY(-4px)" },
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: "center",
                      py: 2,
                      px: 1,
                      "&:last-child": { pb: 2 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        mx: "auto",
                        mb: 1,
                        borderRadius: 2,
                        bgcolor: "primary.main",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tech.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                    >
                      {tech.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </SettingsSection>

          <SettingsSection title="DEVELOPER">
            <Stack spacing={2} divider={<Divider flexItem />}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={1}
              >
                <Typography color="text.secondary">Project Name:</Typography>
                <Typography fontWeight={700}>WeatherApp</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={1}
              >
                <Typography color="text.secondary">Version</Typography>
                <Chip
                  label="1.0.0"
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={1}
              >
                <Typography color="text.secondary">Built With:</Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography fontWeight={600}>React</Typography>
                </Stack>
              </Stack>
            </Stack>
          </SettingsSection>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 3,
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(59,130,246,0.1)"
                  : "rgba(59,130,246,0.08)",
              border: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <InfoOutlined color="primary" sx={{ mt: 0.25 }} />
            <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
              WeatherApp is a portfolio project built with React, Material UI,
              and Open-Meteo APIs.
            </Typography>
          </Paper>
        </Stack>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ open: false, message: "" })}
        message={snackbar.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}
