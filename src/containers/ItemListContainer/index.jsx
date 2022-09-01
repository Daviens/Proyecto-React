import React from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greetings}) => {
  const showAdd = (cantidad) => {
    alert(`Se agregó ${cantidad} a su carrito de compras`)
  }
  return (
    <div>
      <h3>{greetings}</h3>
      <ItemCount stock={12} initial={1} onAdd={showAdd}/>
    </div>
  )
}

export default ItemListContainer