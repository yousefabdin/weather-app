import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { WbSunnyRounded, Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Settings", path: "/settings" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkSx = {
    color: "text.primary",
    px: { xs: 2, md: 2.5 },
    py: 1,
    borderRadius: 999,
    fontWeight: 600,
    textTransform: "none",
    transition: ".25s",
    width: { xs: "100%", md: "auto" },
    justifyContent: { xs: "flex-start", md: "center" },
    "&.active": {
      bgcolor: "primary.main",
      color: "white",
      boxShadow: "0 8px 18px rgba(37,99,235,.35)",
    },
    "&:hover": {
      bgcolor: (theme) =>
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.08)"
          : "rgba(0,0,0,.06)",
    },
  };

  const navLinks = (
    <>
      {pages.map((page) => (
        <Button
          key={page.name}
          component={NavLink}
          to={page.path}
          onClick={() => setMobileOpen(false)}
          sx={navLinkSx}
        >
          {page.name}
        </Button>
      ))}
    </>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(15,23,42,.65)"
              : "rgba(255,255,255,.85)",
          backdropFilter: "blur(18px)",
          borderBottom: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid rgba(255,255,255,.08)"
              : "1px solid rgba(0,0,0,.08)",
          boxShadow: "none",
          mb: { xs: 2, md: 3 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              minHeight: { xs: 64, md: 72 },
              py: { xs: 1, md: 0 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Stack
              component={Link}
              to="/"
              direction="row"
              spacing={1}
              sx={{
                textDecoration: "none",
                color: "inherit",
                alignItems: "center",
                minWidth: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: 40, md: 44 },
                  height: { xs: 40, md: 44 },
                  flexShrink: 0,
                  borderRadius: 3,
                  background: "linear-gradient(135deg,#4F8CFF 0%,#2563EB 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(37,99,235,.35)",
                }}
              >
                <WbSunnyRounded sx={{ color: "#FFD54F", fontSize: { xs: 22, md: 24 } }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1,
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  whiteSpace: "nowrap",
                }}
              >
                WeatherApp
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navLinks}
            </Stack>

            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "min(280px, 85vw)",
            p: 2,
            bgcolor: "background.paper",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <IconButton aria-label="Close navigation menu" onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {pages.map((page) => (
            <ListItemButton
              key={page.name}
              component={NavLink}
              to={page.path}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 3,
                "&.active": {
                  bgcolor: "primary.main",
                  color: "white",
                  "& .MuiListItemText-primary": { fontWeight: 700 },
                },
              }}
            >
              <ListItemText primary={page.name} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
