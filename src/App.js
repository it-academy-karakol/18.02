import React, { Component } from "react";
import "./App.css";
import Example from "./Example/Example";
import Example1 from "./Example1/Example1";
import Gradient from "./Gradient/Gradient";

class App extends Component {
  state = {
    title: "Hello World",
    color1: "#000000",
    color2: "#ffffff"
  };

  changeTitle = newTitle => {
    this.setState({ title: newTitle });
  }

  render() {
    return (
      <div className="App">
        <Gradient color1={this.state.color1} color2={this.state.color2} />


        <Example
          title={this.state.title}
          changeTitle={this.changeTitle}
          />
        <Example1
          title={this.state.title}
          changeTitle={this.changeTitle}
          />
      </div>
    );
  }
}

export default App;
