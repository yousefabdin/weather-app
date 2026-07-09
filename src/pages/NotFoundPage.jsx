import { Button, Container, Stack, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, sm: 3 }}
        sx={{
          minHeight: { xs: "70vh", md: "80vh" },
          textAlign: "center",
          py: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h1"
          fontWeight={700}
          color="primary"
          sx={{ fontSize: { xs: "4rem", sm: "5rem", md: "6rem" } }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, px: { xs: 1, sm: 0 } }}
        >
          Sorry, the page you're looking for doesn't exist, may have been moved,
          or the URL is incorrect.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          startIcon={<Home />}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
}
