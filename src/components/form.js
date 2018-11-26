import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.props.submitWeather}>
        <input
          id="userInput"
          type="text"
          name="city"
          onChange={this.changeHandler}
          value={this.state.input}
          placeholder="enter a city name here"
          required
        />
      </form>
    );
  }
}
export default Form;
