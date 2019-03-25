import React from 'react'

class NavBar extends React.Component{

  render(){
    return(
      <div id="NavBar">
        <h2>Welcome</h2>
        <button>Cocktails</button>
        <button>Appetizers</button>
        <button>Entrees</button>

        <input type="text" placeholder="Search..."></input>
      </div>
    )
  }
}

export default NavBar
