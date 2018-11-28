import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeHandler(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let regex = /[0-9]/g;
    if (regex.test(city)) {
      city = false;
    }
    this.props.submitWeather(city);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
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
