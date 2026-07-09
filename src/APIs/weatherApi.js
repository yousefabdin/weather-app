import axios from "axios";

export const getWatherData = async (lat, long) => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,weather_code`,
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message,
    );
    return null;
  } finally {
    console.log("Fetch is done");
  }
};
