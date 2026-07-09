import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/home/SearchBar";
import WeatherCard from "../components/home/WeatherCard";
import useGeoCoding from "../hooks/useGeoCoding";
import useWeather from "../hooks/useWeather";

function HomePage() {
  const [city, setCity] = useState("Amman");
  const { error, coordinates, setCoordinates } = useGeoCoding(city, setCity);
  const { weather, displayedCity, isLoading } = useWeather(
    coordinates,
    city,
    setCoordinates,
  );

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        flexDirection: "column",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)"
            : "linear-gradient(180deg, #E0F2FE 0%, #F8FAFC 40%, #F1F5F9 100%)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          width: "100%",
          pb: { xs: 3, sm: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: { xs: 2.5, sm: 3, md: 4 } }}>
          <SearchBar setCity={setCity} erorrMessage={error} />
        </Box>

        <WeatherCard
          isLoading={isLoading}
          city={!error && displayedCity}
          weather={weather}
        />
      </Container>

      <Box
        component="footer"
        sx={{ py: { xs: 2, md: 3 }, px: 2, textAlign: "center" }}
      >
        <Typography variant="body2" color="text.secondary">
          Powered by Open-Meteo
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
