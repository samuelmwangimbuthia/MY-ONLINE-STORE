import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock.js';

class App extends Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">Hi{this.props.name}!</p>
        <Clock/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
