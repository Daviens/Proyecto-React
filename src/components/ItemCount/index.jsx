import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
  const [tracker, setTracker] = useState(initial)
  const resta = () => {
    if(tracker > initial){
      setTracker(tracker - 1)
    }else{
      console.log("no se resta");
    }
  }
  const suma = () => {
    if(tracker < stock){
      setTracker(tracker + 1)
    }else{
      console.log("no se suma");
    }
  }
  const addToCart = () => {
    onAdd(tracker)
  }

  return (
    <div className='row border'>
      <button onClick={resta} className="btn col-2">-</button>
      <div className='col-4 text-center'>{tracker}</div>
      <button onClick={suma} className="btn col-2">+</button>
      <button onClick={addToCart} className="btn col-8">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount