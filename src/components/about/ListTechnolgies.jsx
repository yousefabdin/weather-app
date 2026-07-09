import { Box, Chip, Container, Paper, Typography } from "@mui/material";
import {
  Javascript,
  Code,
  Speed,
  Api,
  LocationOn,
  Storage,
} from "@mui/icons-material";

const technologiesUsed = [
  {
    name: "JavaScript (ES6+)",
    icon: <Javascript />,
  },
  {
    name: "React",
    icon: <Code />,
  },
  {
    name: "Vite",
    icon: <Speed />,
  },
  {
    name: "Material UI",
    icon: <Code />,
  },
  {
    name: "Axios",
    icon: <Api />,
  },
  {
    name: "Open-Meteo APIs",
    icon: <Storage />,
  },
  {
    name: "Browser Geolocation API",
    icon: <LocationOn />,
  },
];

export default function ListTechnologies() {
  return (
    <Box
      sx={{
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}

        <Box
          sx={{
            mb: 5,
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
            TECHNOLOGY STACK
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
            Built With Modern Tools
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "text.secondary",
              maxWidth: "650px",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            A carefully selected technology stack focused on performance,
            maintainability, and modern frontend development practices.
          </Typography>
        </Box>

        {/* Technologies Card */}

        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 3,
              md: 5,
            },

            display: "flex",

            flexWrap: "wrap",

            gap: 2,

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
          {technologiesUsed.map((technology) => (
            <Chip
              key={technology.name}
              icon={technology.icon}
              label={technology.name}
              sx={{
                px: 1,

                py: 2.5,

                borderRadius: 3,

                fontSize: "0.95rem",

                fontWeight: 600,

                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.8)",

                border: "1px solid",

                borderColor: "divider",

                transition: "all .25s ease",

                "&:hover": {
                  transform: "translateY(-4px)",

                  borderColor: "primary.main",

                  color: "primary.main",

                  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                },
              }}
            />
          ))}
        </Paper>
      </Container>
    </Box>
  );
}
