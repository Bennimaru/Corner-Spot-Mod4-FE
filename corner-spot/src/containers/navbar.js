import React from 'react'

class NavBar extends React.Component{

  render(){
    return(
      <div id="NavBar">
        <h2>Welcome {this.props.name.name}</h2>
        <button onClick={this.props.showMenu}>Menu</button>
        <button onClick={this.props.handleFilterMenu}>Cocktail</button>
        <button onClick={this.props.handleFilterMenu}>Appetizer</button>
        <button onClick={this.props.handleFilterMenu}>Entree</button>

        <input type="text" placeholder="Search..." value={this.props.value} onChange={this.props.handleSearch} ></input>
      </div>
    )
  }
}

export default NavBar
