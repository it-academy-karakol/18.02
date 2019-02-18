import React, { Component } from "react";
import "./App.css";
import Example from "./Example/Example";
import Example1 from "./Example1/Example1";

class App extends Component {
  state = {
    title: "Hello World"
  };

  changeTitle = newTitle => {
    this.setState({ title: newTitle });
  }

  render() {
    return (
      <div className="App">
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
