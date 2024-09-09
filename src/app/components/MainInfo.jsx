export function MainInfo({weather}){
    return(
        <div>
            <h1>{weather.location.name} - {weather.location.country}</h1>
            <h1>{weather.current.temp_c} °C</h1>
            <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                width="600"
                height="450"
                style={{border: 0}}
                allowFullScreen=""
                loading="auto"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}