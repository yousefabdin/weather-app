import Box from "@mui/material/Box";

const colors = {
  clear: "#FACC15",
  partlyCloudy: "#FACC15",
  cloudy: "#94A3B8",
  fog: "#CBD5E1",
  drizzle: "#60A5FA",
  rain: "#3B82F6",
  snow: "#E2E8F0",
  storm: "#6366F1",
};

function WeatherIcon({ type = "clear", size = 64 }) {
  const color = colors[type] || colors.cloudy;

  if (type === "clear") {
    return (
      <Box sx={{ lineHeight: 0 }}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="14" fill={color} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect key={angle} x="30" y="6" width="4" height="10" rx="2" fill={color} transform={`rotate(${angle} 32 32)`} />
          ))}
        </svg>
      </Box>
    );
  }

  if (type === "partlyCloudy") {
    return (
      <Box sx={{ lineHeight: 0 }}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
          <circle cx="24" cy="22" r="10" fill={color} />
          <path d="M16 44c0-6.627 5.373-12 12-12 2.2 0 4.26.59 6.03 1.62C36.5 30.5 40.5 28 45 28c6.627 0 12 5.373 12 12s-5.373 12-12 12H28c-6.627 0-12-5.373-12-12z" fill="#E2E8F0" />
        </svg>
      </Box>
    );
  }

  if (type === "rain") {
    return (
      <Box sx={{ lineHeight: 0 }}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
          <path d="M14 28c0-7.732 6.268-14 14-14 2.567 0 4.97.69 7.04 1.89C38.5 12.5 42.5 10 47 10c7.732 0 14 6.268 14 14s-6.268 14-14 14H28c-7.732 0-14-6.268-14-14z" fill="#94A3B8" />
          <path d="M22 44l-4 8M32 44l-4 8M42 44l-4 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
        </svg>
      </Box>
    );
  }

  return (
    <Box sx={{ lineHeight: 0 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path d="M12 40c0-8.837 7.163-16 16-16 2.933 0 5.68.79 8.04 2.16C39.5 20.5 44.5 18 50 18c8.837 0 16 7.163 16 16s-7.163 16-16 16H28c-8.837 0-16-7.163-16-16z" fill={color} />
      </svg>
    </Box>
  );
}

export default WeatherIcon;
