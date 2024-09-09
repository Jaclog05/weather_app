'use client'
import { useState, useEffect } from "react";
import { WeatherApp } from "./components/WeatherApp";
import { MainInfo } from "./components/MainInfo";

export default function Home() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
      loadInfo('bogota')
  }, [])

  async function loadInfo(city){
    try {
      const request = await fetch(`${process.env.NEXT_PUBLIC_URL}?key=${process.env.NEXT_PUBLIC_KEY}&q=${city}`)
      const json = await request.json()
      setWeather(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city){
    setWeather(null)
    loadInfo(city)
  }

  return (
    <>
      <WeatherApp onCityChanged={handleChangeCity}/>
      {
        weather ? <MainInfo key={weather.location.name} weather={weather}/> : <h1>Loading...</h1>
      }
    </>
  );
}
