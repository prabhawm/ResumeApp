import React, { Component } from 'react';
import resume from './PVP_DevOps_L2.pdf'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">          
          
          <p>
            <iframe title='document' src={resume} width='1366px' height='623px' frameBorder='0' className="CV"> 
            </iframe>
          </p>
         
          
        </header>
      </div>
    );
  }
}

export default App;
