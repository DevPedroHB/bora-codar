import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

export const apiChallenge09 = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_RATES_API_KEY}`,
});

export const apiChallenge10 = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});
