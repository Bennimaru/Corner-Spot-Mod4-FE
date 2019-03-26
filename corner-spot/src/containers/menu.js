import React from 'react'
import ItemCard from '../components/itemcard'

class Menu extends React.Component{

  renderMenu= item=>{
    return <ItemCard key={item.id} item={item} handleClick={this.props.handleClick} button='+'/>
  }

  render(){
    return(
      <div id="Menu">
        <h2>Menu</h2>
        {this.props.menu.map(this.renderMenu)}
      </div>
    )
  }
}

export default Menu
