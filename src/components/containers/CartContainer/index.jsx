import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../../context/CartContext'
import CartCard from '../../CartCard'

const CartContainer = () => {
  const { carrito, clearCart } = useContext(Shop)
  let total = 0
  carrito.forEach((producto) => {
    let unidad = producto.cantidad * producto.price
    total += unidad
  })
  return (
    <div className='row d-flex justify-content-center'>
      <div className='d-flex justify-content-end px-5'>
        <button onClick={clearCart} className="btn btn-outline-secondary">🗑</button>
      </div>
      <div className='col-10 border rounded shadow p-3 bg-primary bg-opacity-50'>
        <div>
          {carrito.length ?
            carrito.map((producto) => <CartCard key={producto.id1} prop={producto} />)
            :
            <div className='text-center'>
              <h5>No tienes productos en tu carrito de compras</h5>
              <Link className="btn" to="/">Inicio</Link>
            </div>}
          <div className='d-flex justify-content-end border-top border-dark'>
            <h4>Total: ${total}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartContainer