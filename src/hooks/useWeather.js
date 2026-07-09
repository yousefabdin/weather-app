import { useState, useEffect } from "react";
import { getWatherData } from "../APIs/weatherApi";
import getUserLocation from "../utils/getLocation";
export default function useWeather(coordinates, city, setCoordinates) {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [displayedCity, setDisplayedCity] = useState("Amman");
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!coordinates) {
        setIsLoading(false);
        setWeather(null);
        return;
      }
      setIsLoading(true);

      const data = await getWatherData(
        coordinates.latitude,
        coordinates.longitude,
      );
      setWeather(data);
      setIsLoading(false);
      setDisplayedCity(city);
    };

    if (coordinates) {
      fetchWeatherData();
    }
  }, [city, coordinates]);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { latitude, longitude } = await getUserLocation();
        setCoordinates({
          latitude,
          longitude,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { weather, isLoading, displayedCity };
}
