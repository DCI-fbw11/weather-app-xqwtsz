import React, { Component } from "react";
import "./App.css";
import Text from "./components/text";
import Form from "./components/form";
import Weather from "./components/weather";

const key = "ccf31ad40fb6d05a1f40b2802a01eada";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      weather: "",
      icon: "",
      temperature: null,
      error: ""
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async city => {
    //const city = event.target.elements.city.value;
    console.log(city);
    let raw;
    let data;

    if (!city) {
      this.setState({
        city: "",
        weather: "",
        icon: ``,
        temperature: "",
        error: "No numbers allowed."
      });
    } else {
      try {
        raw = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
        );

        data = await raw.json();
      } catch (err) {
        console.log(err);
      }
      console.log(data);
      if (data.cod === "404") {
        this.setState({
          city: "",
          weather: "",
          icon: ``,
          temperature: "",
          error: "City not found."
        });
      } else {
        this.setState({
          city: data.name,
          weather: data.weather[0].main,
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          temperature: Math.round(data.main.temp).toString() + `℃`,
          error: ""
        });
        console.log(this.state);
      }
    }
  };

  render() {
    return (
      <div>
        <Text />
        <Form submitWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          icon={this.state.icon}
          weather={this.state.weather}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
