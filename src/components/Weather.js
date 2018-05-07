import React from 'react';

const Weather = props => (
      <div className="showWeather hidden hideComplete" id="weatherInfo">
      { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
      { props.temperature && <p>Temperature: { props.temperature } °C </p> }
      { props.humidity && <p>Humidity: { props.humidity }</p> }
      { props.description && <p>Conditions: { props.description }</p> }
      { props.error && <p>{props.error}</p> }
    </div>
  );

export default Weather;
