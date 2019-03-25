import React from 'react';
import NavBar from './containers/navbar';
import Menu from './containers/menu';
import Order from './containers/order';
import './App.css'

class App extends React.Component{

  state={
    menu:[],
    order:[],
    userInput:""
  }

  componentDidMount(){
    fetch('http://localhost:3005/api/v1/items')
    .then(res=>res.json())
    .then(items=>this.setState({
      menu:items
    }))
  }

  handleAdd= item =>{
    let newOrder=[item,...this.state.order]
    this.setState({
      order: newOrder
    })
  }

  handleRemove= item =>{
    let newOrder = this.state.order.filter(items=>items.id!==item.id)
    this.setState({
      order:newOrder
    })
  }

  handleSearch= event =>{
    this.setState({
      userInput:event.target.value
    })
  }

  filter= array =>{
    if (this.state.userInput === "") {
      return array
    } else {
      return [...array].filter(item => item.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    }
  }

  render(){
    console.log(this.state.userInput);
    return(
      <div className="App">
        <NavBar handleSearch={this.handleSearch} value={this.state.userInput}/>
        <Menu menu={this.filter(this.state.menu)} handleClick={this.handleAdd}/>
        <Order order={this.filter(this.state.order)} handleClick={this.handleRemove}/>
      </div>
    )
  }
}

export default App
