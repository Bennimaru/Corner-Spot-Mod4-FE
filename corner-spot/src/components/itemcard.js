import React from 'react'

const ItemCard = props =>{

  return(
    <div onClick={() =>props.handleClick(props.item)}>
      <h4>{props.item.name}</h4>
      <p>${props.item.price}</p>
      <p>{props.item.description}</p>
    </div>
  )
}

export default ItemCard
