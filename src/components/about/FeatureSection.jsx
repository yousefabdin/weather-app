import { Box, Container, Typography, Card, CardContent } from "@mui/material";

import {
  LocationOn,
  Search,
  CalendarMonth,
  Speed,
  Architecture,
  Thermostat,
} from "@mui/icons-material";

export default function FeatureSection() {
  const FeaturesUsed = [
    {
      icon: <LocationOn />,
      featureName: "Current Location",
      description:
        "Automatically detects your location and displays the current weather.",
    },

    {
      icon: <Search />,
      featureName: "City Search",
      description: "Search weather information for cities around the world.",
    },

    {
      icon: <CalendarMonth />,
      featureName: "7-Day Weather Forecast",
      description:
        "View detailed daily forecasts including weather conditions and temperature trends.",
    },

    {
      icon: <Speed />,
      featureName: "Fast & Responsive",
      description:
        "Built with React and optimized for smooth interactions across devices.",
    },

    {
      icon: <Architecture />,
      featureName: "Reusable Architecture",
      description:
        "Built using reusable components and custom hooks for better maintainability.",
    },
    {
      icon: <Thermostat />,
      featureName: "Detailed Weather Insights",
      description:
        " Get deeper weather information including highest and lowest temperatures, current conditions, and detailed weather data.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}

        <Box
          sx={{
            mb: 6,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            APPLICATION FEATURES
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 800,
              letterSpacing: "-1px",
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Built With Modern Features
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: "650px",
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            Designed with modern React practices to provide a smooth, scalable,
            and enjoyable weather experience.
          </Typography>
        </Box>

        {/* Feature Cards */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            },

            gap: 3,
          }}
        >
          {FeaturesUsed.map((feature, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",

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

                transition: "all .3s ease",

                "&:hover": {
                  transform: "translateY(-8px)",

                  borderColor: "primary.main",

                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  height: "100%",
                }}
              >
                {/* Icon */}

                <Box
                  sx={{
                    width: 50,
                    height: 50,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    borderRadius: 3,

                    background: "primary.main",

                    color: "white",
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {feature.featureName}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
