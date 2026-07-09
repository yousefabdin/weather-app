import { useState, useEffect } from "react";
import { convertGeoCoding } from "../APIs/geoCodingApi";

export default function useGeoCoding(city, setCity) {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchLocation = async () => {
      const data = await convertGeoCoding(city);
      if (!data?.results?.length) {
        setError("City Not Found!");
        setCity("");
        setCoordinates(null);
      } else {
        const { latitude, longitude } = data.results[0];

        setCoordinates({
          latitude,
          longitude,
        });
        setError("");
      }
    };

    if (city) {
      fetchLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  return { error, coordinates, setCoordinates };
}
