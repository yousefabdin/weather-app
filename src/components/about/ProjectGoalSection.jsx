import { Box, Container, Typography, Paper } from "@mui/material";

export default function ProjectGoalsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              WHY THIS PROJECT
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
              Project Goals
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 3,
                md: 5,
              },

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

              transition: "all 0.3s ease",

              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 20px 40px rgba(0,0,0,0.3)"
                    : "0 20px 40px rgba(0,0,0,0.08)",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: {
                  xs: "1rem",
                  md: "1.15rem",
                },
                lineHeight: 1.9,
              }}
            >
              This project was created to strengthen my React skills while
              following software engineering best practices. Rather than
              focusing only on functionality, I aimed to build an application
              that is scalable, maintainable, and easy to extend.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                color: "text.secondary",
                fontSize: {
                  xs: "1rem",
                  md: "1.15rem",
                },
                lineHeight: 1.9,
              }}
            >
              Throughout the development process, I focused on clean code
              organization, reusable logic, custom hooks, component composition,
              and creating a polished user experience similar to modern
              production applications.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
