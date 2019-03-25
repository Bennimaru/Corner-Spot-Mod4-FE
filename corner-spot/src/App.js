import React from 'react';
import NavBar from './containers/navbar';
import Menu from './containers/menu';
import Order from './containers/order';
import './App.css'

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <NavBar />
        <Menu />
        <Order />
      </div>
    )
  }
}

export default App
