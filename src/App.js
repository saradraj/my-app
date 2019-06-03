import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isClicked: false,
      todos: []
    };
  }

  onClick = () => {
    this.setState({
      isClicked: true,
      todos: this.state.todos.concat(this.state.text),
      text: ""
    });
  };

  onChange = event => {
    // console.log(event.target.value);
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
       

        <input value={this.state.text} onChange={this.onChange} />
        <button onClick={this.onClick}>Click Me!</button>
        {this.state.todos.map(function(value) {
          return <li>{value}</li>;
        })}
         </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
