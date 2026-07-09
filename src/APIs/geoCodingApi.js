//https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

import axios from "axios";

export const convertGeoCoding = async (cityName) => {
  try {
    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`,
    );
    return response.data;
  } catch (error) {
    console.error("error in fetching ", error.message);
    return null;
  } finally {
    console.log("fetch completed succesfuly");
  }
};
