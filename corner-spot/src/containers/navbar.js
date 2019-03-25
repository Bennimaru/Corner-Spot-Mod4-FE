import React from 'react'

class NavBar extends React.Component{

  render(){
    return(
      <div id="NavBar">
        Navigation here
        <button>Cocktails</button>
        <button>Small Plates</button>

        <input type="text" placeholder="Search..."></input>
      </div>
    )
  }
}

export default NavBar
