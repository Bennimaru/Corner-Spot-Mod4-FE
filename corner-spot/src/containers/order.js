import React from 'react'
import ItemCard from '../components/itemcard'

class Order extends React.Component{

  renderOrder= item =>{
    return <ItemCard key={item.id} item={item} handleClick={this.props.handleClick} button='-'/>
  }

  render(){
    return(
      <div id="Order">
        <h2>Current Order</h2>
        {this.props.order.map(this.renderOrder)}
      </div>
    )
  }
}

export default Order
