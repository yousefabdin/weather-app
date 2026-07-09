export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export const formatTemperature = (celsius, unit = "celsius") => {
  const value =
    unit === "fahrenheit" ? celsiusToFahrenheit(celsius) : celsius;
  const rounded = Math.round(value);
  const symbol = unit === "fahrenheit" ? "°F" : "°C";

  return {
    value: rounded,
    symbol,
    display: `${rounded}${symbol}`,
  };
};
