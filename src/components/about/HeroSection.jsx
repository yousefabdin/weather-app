import { Box, Chip, Container, Typography } from "@mui/material";
import "./about.css";
export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 16 },
      }}
    >
      <Box className="hero-circle hero-circle-1" />
      <Box className="hero-circle hero-circle-2" />

      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Chip
            label="React Portfolio Project"
            color="primary"
            sx={{
              fontWeight: 600,
              px: 1,
              borderRadius: "999px",
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "2.6rem",
                sm: "3.5rem",
                md: "4.5rem",
              },
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            About{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg,#3B82F6,#06B6D4,#8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WeatherApp
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: "760px",
              color: "text.secondary",
              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },
              lineHeight: 1.9,
            }}
          >
            WeatherApp is a modern React application built to provide accurate
            weather information through a clean, responsive, and intuitive user
            interface. More than just a weather app, it represents my journey in
            learning professional React development through clean architecture,
            reusable components, custom hooks, and modern UI/UX principles.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
