'use client'
import { useState } from "react"

export function WeatherApp({onCityChanged}){

    const [city, setCity] = useState('')

    function handleChange(e) {
        setCity(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        onCityChanged(city)
        setCity('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="inputCity" type="text" value={city}/>
        </form>
    )
}