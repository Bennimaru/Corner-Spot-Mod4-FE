import React from 'react';
import NavBar from './containers/navbar';
import Menu from './containers/menu';
import Order from './containers/order';
import './App.css'

class App extends React.Component{

  state={
    menu:[],
    order:[]
  }

  componentDidMount(){
    fetch('http://localhost:3005/api/v1/items')
    .then(res=>res.json())
    .then(items=>this.setState({
      menu:items
    }))
  }

  handleClick= item =>{
    let newOrder=[item,...this.state.order]
    this.setState({
      order: newOrder
    })
  }

  render(){
    return(
      <div className="App">
        <NavBar />
        <Menu menu={this.state.menu} handleClick={this.handleClick}/>
        <Order order={this.state.order}/>
      </div>
    )
  }
}

export default App
