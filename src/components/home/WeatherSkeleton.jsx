import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function WeatherSkeleton() {
  return (
    <Box>
      <Card sx={{ borderRadius: { xs: 3, md: 4 }, mb: { xs: 3, md: 5 } }}>
        <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 5 } }}>
          <Skeleton width="60%" height={32} />
          <Skeleton width="40%" />
          <Skeleton width="30%" height={80} style={{ marginTop: 20 }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 2 }}>
            <Skeleton width="calc(50% - 8px)" height={60} />
            <Skeleton width="calc(50% - 8px)" height={60} />
            <Skeleton width="calc(50% - 8px)" height={60} />
            <Skeleton width="calc(50% - 8px)" height={60} />
          </Box>
        </CardContent>
      </Card>
      <Skeleton width={160} height={28} style={{ marginBottom: 16 }} />
      <Box sx={{ display: "flex", gap: 2, overflow: "hidden" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} width={110} height={160} borderRadius={12} />
        ))}
      </Box>
    </Box>
  );
}

export default WeatherSkeleton;
