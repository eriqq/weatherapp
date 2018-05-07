import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather} id="weatherForm">
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>
    <button className="weather-btn">Find</button>
  </form>
);

export default Form;
