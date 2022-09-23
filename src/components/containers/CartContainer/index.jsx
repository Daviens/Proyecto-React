import React, { useContext } from 'react'
import { Shop } from '../../../context/CartContext'
import CartCard from '../../CartCard'

const CartContainer = () => {
  const { carrito, clearCart } = useContext(Shop)
  return (
    <div>
      <div className='d-flex justify-content-end'>
        <button onClick={clearCart} className="btn btn-outline-secondary">🗑</button>
      </div>
      <div>
        {carrito.length ? carrito.map((producto) => <CartCard key={producto.id} prop={producto} />) : <div>nada</div>}
      </div>
    </div>
  )
}
export default CartContainer