import React from 'react'
import ItemCard from '../components/itemcard'

class Menu extends React.Component{

  renderMenu= item=>{
    return <ItemCard key={item.id} item={item} handleClick={this.props.handleClick}/>
  }

  render(){
    console.log(this.props.menu);
    return(
      <div id="Menu">
        <h2>Menu here</h2>
        {this.props.menu.map(this.renderMenu)}
      </div>
    )
  }
}

export default Menu
