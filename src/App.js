import React, { Component } from 'react';
import SideMenu from './containers/SideMenu'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
       <SideMenu username='teste' active='Monitoramento'/>
      </div>
    );
  }
}

export default App;

// Paleta #0144BF #003494 #002A76 #002059 #001336