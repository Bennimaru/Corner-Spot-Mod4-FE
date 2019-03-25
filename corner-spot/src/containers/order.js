import React from 'react'
import ItemCard from '../components/itemcard'

class Order extends React.Component{
  render(){
    return(
      <div id="Order">
        <h4>This is your order</h4>
        <ItemCard />
      </div>
    )
  }
}

export default Order
