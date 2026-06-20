import axios from "axios";

export interface GetLocationByIpResponse {
  lat?: number;
  lon?: number;
  city: string;
}

export const getLocationByIp = async (): Promise<GetLocationByIpResponse> => {
  const { data } = await axios.get<GetLocationByIpResponse>(
    "http://ip-api.com/json/"
  );

  return {
    lat: data.lat,
    lon: data.lon,
    city: data.city,
  };
};

export const getWeather = async ({
  lat,
  lon,
  city,
}: GetLocationByIpResponse) => {
  try {
    if (lat && lon) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/weather?latitude=${lat}&longitude=${lon}`
      );
      return data.temperature;
    }

    if (city) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/weather?city=${city}`
      );
      return data.temperature;
    }
  } catch (error) {
    console.log(error);
  }
};
