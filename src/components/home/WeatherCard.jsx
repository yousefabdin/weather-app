import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WeatherIcon from "../../utils/WeatherIcon";
import { formatTemperature } from "../../utils/formatTemperature";
import { useTemperatureUnit } from "../../theme/ThemeModeProvider";
import WeatherSkeleton from "./WeatherSkeleton";

const weatherLabels = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Foggy",
  51: "Drizzle",
  53: "Drizzle",
  55: "Drizzle",
  61: "Rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Showers",
  81: "Showers",
  82: "Showers",
  95: "Thunderstorm",
  96: "Thunderstorm",
  99: "Thunderstorm",
};

const weatherTypes = {
  0: "clear",
  1: "clear",
  2: "partlyCloudy",
  3: "cloudy",
  45: "fog",
  48: "fog",
  51: "drizzle",
  53: "drizzle",
  55: "drizzle",
  61: "rain",
  63: "rain",
  65: "rain",
  71: "snow",
  73: "snow",
  75: "snow",
  80: "rain",
  81: "rain",
  82: "rain",
  95: "storm",
  96: "storm",
  99: "storm",
};

function WeatherCard({ city, isLoading, weather }) {
  const { unit } = useTemperatureUnit();

  if (isLoading) {
    return <WeatherSkeleton />;
  }

  if (!weather) {
    return null;
  }

  const currentTemp = formatTemperature(weather.current.temperature_2m, unit);
  const highTemp = formatTemperature(weather.daily.temperature_2m_max[0], unit);
  const lowTemp = formatTemperature(weather.daily.temperature_2m_min[0], unit);
  const todayCode = weather.daily.weather_code[0];
  const conditionLabel = weatherLabels[todayCode] || "Unknown";
  const conditionType = weatherTypes[todayCode] || "cloudy";
  const now = new Date();

  return (
    <>
      <Card
        sx={{
          mb: { xs: 3, md: 5 },
          borderRadius: { xs: 3, md: 4 },
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #3B82F6 0%, #2563EB 60%, #1D4ED8 100%)",
          boxShadow: "0 12px 40px rgba(59,130,246,0.35)",
          border: "none",
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 5 } }}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 700,
              mb: 0.5,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
              wordBreak: "break-word",
            }}
          >
            {city || "City Not Found"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.75)",
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          >
            {now.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
            {" · "}
            {now.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: "space-between",
              gap: 2,
              mb: { xs: 2, md: 3 },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "3.5rem", sm: "4.5rem", md: "6rem" },
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {city ? currentTemp.value : ""}°
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <WeatherIcon type={conditionType} size={28} />
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                >
                  {city ? conditionLabel : "No Data"}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <WeatherIcon type={conditionType} size={120} />
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, sm: 1.5 } }}
          >
            {[
              { label: "Current", value: currentTemp.display },
              { label: "High", value: highTemp.display },
              { label: "Low", value: lowTemp.display },
              { label: "Condition", value: conditionLabel },
            ].map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  flex: { xs: "1 1 calc(50% - 8px)", sm: "1 1 0" },
                  minWidth: { xs: "calc(50% - 8px)", sm: 120 },
                  px: { xs: 1.5, sm: 2 },
                  py: 1.5,
                  borderRadius: 3,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.75)", display: "block" }}
                >
                  {city ? stat.label : "No Data"}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    wordBreak: "break-word",
                  }}
                >
                  {city ? stat.value : "No data"}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2.5,
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
        }}
      >
        {city ? "7-Day Forecast" : "No Data Found"}
      </Typography>

      {city && (
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 2 },
            overflowX: "auto",
            pb: 1,
            mx: { xs: -0.5, sm: 0 },
            px: { xs: 0.5, sm: 0 },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            scrollSnapType: { xs: "x mandatory", lg: "none" },
          }}
        >
          {weather.daily.temperature_2m_max.map((maxTemp, index) => {
            const code = weather.daily.weather_code[index];
            const date = new Date(weather.daily.time[index] + "T12:00:00");

            return (
              <Card
                key={weather.daily.time[index]}
                sx={{
                  flex: { xs: "0 0 110px", sm: "0 0 120px", lg: "1 1 0" },
                  minWidth: { xs: 110, sm: 120 },
                  maxWidth: { lg: "100%" },
                  borderRadius: 3,
                  scrollSnapAlign: "start",
                  backgroundColor: "background.paper",
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 4px 16px rgba(0,0,0,0.3)"
                      : "0 4px 16px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <CardContent
                  sx={{ textAlign: "center", py: { xs: 2, sm: 2.5 }, px: 1 }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    }}
                  >
                    {index === 0
                      ? "Today"
                      : date.toLocaleDateString("en-US", { weekday: "short" })}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
                  >
                    {date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                  <Box sx={{ my: 1 }}>
                    <WeatherIcon
                      type={weatherTypes[code] || "cloudy"}
                      size={48}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.85rem", sm: "1rem" },
                    }}
                  >
                    {formatTemperature(maxTemp, unit).value}° /{" "}
                    {
                      formatTemperature(
                        weather.daily.temperature_2m_min[index],
                        unit,
                      ).value
                    }
                    °
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      )}
    </>
  );
}

export default WeatherCard;
