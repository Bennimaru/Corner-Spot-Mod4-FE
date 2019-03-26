import React from 'react'

class NavBar extends React.Component{

  render(){
    return(
      <div id="NavBar">
        <h2>Welcome {this.props.name}</h2>

        <button>Cocktails</button>
        <button>Appetizers</button>
        <button>Entrees</button>

        <input type="text" placeholder="Search..." value={this.props.value} onChange={this.props.handleSearch} ></input>
      </div>
    )
  }
}

export default NavBar
