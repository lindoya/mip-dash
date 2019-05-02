import React, { Component } from 'react';
import SideMenu from './containers/SideMenu'
import './App.css';
import CardDefault from './components/Card'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu username='Guilherme' active='Monitoramento' />
        <CardDefault />
      </div>
    );
  }
}

export default App;

// Paleta #0144BF #003494 #002A76 #002059 #001336