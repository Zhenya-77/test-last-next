import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const lat = request.nextUrl.searchParams.get("latitude");
  const lon = request.nextUrl.searchParams.get("longitude");
  const city = request.nextUrl.searchParams.get("city");

  try {
    if (lat && lon) {
      const { data } = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
      );
      return NextResponse.json({ temperature: data.current.temperature_2m });
    }

    if (city) {
      const { data } = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
      );

      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;

      const { data: res } = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
      );
      return NextResponse.json({ temperature: res.current.temperature_2m });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 404 }
    );
  }
}
