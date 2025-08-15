// @ts-nocheck
import React, { Component } from "react";


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeDetail = () => {
    this.setState({ 
        color: "blue",
        brand: "Tesla",
        model: "Model S",
        year: 2023,
    });
  };

  componentDidMount() {
console.log("componentDidMount");      
  }

  componentWillUnmount() {
      console.log("componentWillUnmount");
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          color: {this.state.color} - Model: {this.state.model} from{" "} {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeDetail}
        >Change Detail</button>
      </div>
    );
  }
}

export default Test;