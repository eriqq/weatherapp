import React, { Component } from 'react';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import './App.css';
import cloud from './img/cloud-01.svg'

const API_KEY = "ef2a3d8bd62aac46d115acba260c2a0f";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  weatherChanger(){
    
  }

  toggleHide(){
    var elem = document.getElementById("weatherForm");
    var elem_2 = document.getElementById("weatherInfo");
    elem.classList.add("hidden");
    setTimeout(function(){
    elem.classList.add("hideComplete")
    elem_2.classList.remove("hideComplete");
    },500)
    setTimeout(function(){
      elem_2.classList.add("show");
      elem_2.classList.remove("hidden");
    },600);


  }

  getWeather = async (e) => {
    e.preventDefault();
    var that = this;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if(data.main !== undefined){

      this.toggleHide();
      this.setState({
        temperature: Math.round((data.main.temp - 273),1),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: data.message
      });
    } else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "No results"
      });
    }
  }
  render(){
    return(
      <div>
      <div className="wrapper">

        <div className="left-container">
          <div className="image-container"></div>

          </div>
          <div className="right-container">
            <div className="App">
              <Titles />
              <Form getWeather={this.getWeather}/>
              <Weather
                show = {this.state.show}
                temperature={this.state.temperature}
                city ={this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                error = {this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
