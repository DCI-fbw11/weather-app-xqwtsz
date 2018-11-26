import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <div id="textDiv">
          <h1 id="cityName">{this.props.city}</h1>
          <h2 id="weather">{this.props.weather}</h2>
        </div>
        <div id="miniTempDiv">
          <img
            id="weatherIcon"
            src={this.props.icon}
            alt=""
            width="100px"
            height="100px"
          />

          <h1 id="bigTemp">{this.props.temperature}</h1>
        </div>
      </div>
    );
  }
}
export default Weather;
