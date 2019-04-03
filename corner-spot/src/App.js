import React from 'react';
import NavBar from './containers/navbar';
import Menu from './containers/menu';
import Order from './containers/order';
import './App.css'
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './containers/home'

class App extends React.Component{

  state={
    menu:[],
    filteredMenu:[],
    order:[],
    userInput:"",
    user:{}
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
    .then( user => this.setState({
      user: user
    }), this.props.history.push("/menu"))
  }

  componentDidMount(){
    fetch('http://localhost:3005/api/v1/items')
    .then(res=>res.json())
    .then(items=>this.setState({
      menu:items,
      filteredMenu:items
    }))
  }

  handleAdd= item =>{
    let newOrder=[item,...this.state.order]
    console.log(item.id);
    fetch('http://localhost:3005/api/v1/orders',{
      method: "POST",
      headers:{
        'Content-Type':"application/json",
        'Accept': "application/json"
      },
      body:JSON.stringify({
        user_id:this.state.user.id,
        item_id:item.id
      })
    })
    .then(res => res.json())
    .then(resp => this.setState({
      order: newOrder
      })
    )
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
    if(this.state.userInput === ""){
      return array
    } else {
      return [...array].filter(item => item.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    }
  }

  showMenu= event=>{
    this.setState({
      filteredMenu:[...this.state.menu]
    })
  }

  filterMenu= event=>{
    console.log(event.target.innerText);
    let filterItem = event.target.innerText
    this.setState({
      filteredMenu: [...this.state.menu].filter(item=>item.category===filterItem)
    })
  }

  render(){
    console.log(this.state.user);
    return(
      <div className="App">
        <Switch>
          <Route path='/menu' render={() =><div>
            <NavBar handleSearch={this.handleSearch} handleFilterMenu={this.filterMenu} showMenu={this.showMenu} value={this.state.userInput} name={this.state.user}/>
            <Menu menu={this.filter(this.state.filteredMenu)} handleClick={this.handleAdd}/>
            <Order order={this.filter(this.state.order)} handleClick={this.handleRemove}/>
            </div> }/>
          <Route exact path='/' render={()=>
           <Home handleSubmit={this.handleSubmit} value={this.state.user}/>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
