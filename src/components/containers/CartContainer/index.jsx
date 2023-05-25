import React, { useContext } from 'react'
import CartCard from '../../CartCard'
import { Shop } from '../../../context/CartContext'
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'sweetalert2/src/sweetalert2.scss'
import ProductService from '../../../services/productSevice'
import CartService from '../../../services/cartService'

const CartContainer = () => {
  const { carrito, clearCart, total } = useContext(Shop)
  const totalSuma = total()
  const MySwal = withReactContent(Swal)
  const productService = new ProductService()
  const cartService = new CartService()
  const navg = useNavigate()

  const comprar = async () => {
    if (!carrito.length) {
      return MySwal.fire({
        title: 'Tu carrito está vacío',
        icon: 'error',
        confirmButtonText: 'Volver',
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then(() => navg("/"))
    } else {
      for (const productoCarrito of carrito) {
        await productService.putProduct(productoCarrito._id, {
          stock: productoCarrito.stock - productoCarrito.cantidad
        });
      }
    }
    await cartService.sendProducts(carrito)
    clearCart()
  }

  return (
    <div className='row d-flex justify-content-center gap-3'>
      <div className='d-flex justify-content-end px-5'>
        <button onClick={clearCart} className="btn btn-outline-secondary">🗑</button>
      </div>
      <div className='col-7 border rounded shadow p-3 bg-primary bg-opacity-50 d-flex justify-content-center'>
        <div className='d-flex flex-column'>
          {carrito.length ?
            carrito.map((producto) => <CartCard key={producto._id} prop={producto} />)
            :
            <div className='text-center align-self-center'>
              <h5>No tienes productos en tu carrito de compras</h5>
              <Link className="btn" to="/">Inicio</Link>
            </div>}
        </div>
      </div>
      <div className='col-3 row border rounded gap-3 limite ms-2 shadow p-3'>
        <h4>Total: ${totalSuma}</h4>
        {carrito.length? 
          <button className={`btn border-dark`} onClick={comprar}>Finalizar Compra</button>
          :
          <p>Necesita ingresar en su cuenta o agregar productos para poder finalizar su compra</p>
        }   
      </div>
    </div>
  )
}
export default CartContainer