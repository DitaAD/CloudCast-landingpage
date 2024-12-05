// src/utils/api.ts

const API_KEY = "c09b5972d86755d6dbc6e1eaa959610c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (city: string) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error("Failed to fetch weather data");
  return response.json();
};
