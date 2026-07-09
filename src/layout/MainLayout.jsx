import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowX: "hidden",
        bgcolor: "background.default",
      }}
    >
      <NavBar />
      <Outlet />
    </Box>
  );
}
