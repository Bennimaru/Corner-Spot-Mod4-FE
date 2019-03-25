import React from 'react'

const ItemCard = props =>{

  return(
    <div className="item-card">
      <h4>{props.item.name}</h4>
      <p>${props.item.price}</p>
      <p>{props.item.description}</p>
      <button onClick={() =>props.handleClick(props.item)}>{props.button}</button>
    </div>
  )
}

export default ItemCard
