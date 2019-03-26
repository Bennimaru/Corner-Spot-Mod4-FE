import React from 'react';
import NavBar from './containers/navbar';
import Menu from './containers/menu';
import Order from './containers/order';
import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './containers/home'

class App extends React.Component{

  state={
    menu:[],
    order:[],
    userInput:"",
    user:""
  }

  handleSubmit= event =>{
    event.preventDefault()
    let inputName = event.target[0].value
    fetch("http://localhost:3005/api/v1/users",{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        'Accept': "application/json"
      },
      body:JSON.stringify({name:inputName})
    })
    .then(res => res.json())
    .then(this.setState({
      user:inputName
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

  // <NavBar handleSearch={this.handleSearch} value={this.state.userInput}/>
  // <Menu menu={this.filter(this.state.menu)} handleClick={this.handleAdd}/>
  // <Order order={this.filter(this.state.order)} handleClick={this.handleRemove}/>

  componentDidMount(){
    fetch('http://localhost:3005/api/v1/items')
    .then(res=>res.json())
    .then(items=>this.setState({
      menu:items
    }))
  }

  render(){
    if(this.state.user){
      return <Redirect to="/menu" />
    }
    return(
      <div className="App">
        <Switch>
          <Route path='/' render={()=><Home handleSubmit={this.handleSubmit} value={this.state.user}/>}/>
          <Route path='/menu' render={()=>
            <div>
            hi
            </div>
          }/>
        </Switch>
      </div>
    )
  }
}

export default App
