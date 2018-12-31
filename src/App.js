import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
	  var myStyle = {
		  fontSize:100,
		  color:'#FF0000'
	  }
    return (
	<div>
		<div>
			<h1 style={myStyle}>{1+1}My Style</h1>
		</div>
		<div>
			<h1 style={myStyle}>{1+1}My Style</h1>
		</div>
	</div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}

export default App;
