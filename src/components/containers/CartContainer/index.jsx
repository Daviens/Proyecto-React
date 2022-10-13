import React, { useContext, useState } from 'react'
import CartCard from '../../CartCard'
import Form from '../../Form'
import { Shop } from '../../../context/CartContext'
import "./styles.css"
import generarOrden from '../../../services/generarOrden'
import { Link, useNavigate } from 'react-router-dom'
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../../firebase/config'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CartContainer = () => {
  const { carrito, clearCart, total, setCarrito } = useContext(Shop)
  const totalSuma = total()
  const [ordenId, setOrdenId] = useState()
  const [habilitar, setHabilitar] = useState(true)
  const [email, setEmail] = useState()
  const [cel, setCel] = useState()
  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [compraFinalizada, setCompraFinalizada] = useState(false)
  const MySwal = withReactContent(Swal)

  const activarCompra = (boolean) => {
    setHabilitar(boolean)
  }
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
      const orden = generarOrden(nombre, email, cel, apellido, carrito, totalSuma)
      await addDoc(collection(db, "orders"), orden).then(({ id }) => {
        setOrdenId(id)
      }).catch(error => {
        console.log(error);
      })
      carrito.forEach(async (productoCarrito) => {
        const productRef = doc(db, "products", productoCarrito.id);
        const productSnap = await getDoc(productRef);
        await updateDoc(productRef, {
          stock: productSnap.data().stock - productoCarrito.cantidad,
        });
      });
      setCompraFinalizada(true)
    }
    setHabilitar(true)
    setCarrito([])
    compraFinalizada && Swal.fire(
      'Gracias por tu compra!',
      `Aquí tienes tu numero de orden: ${ordenId}`,
      'info'
    )
  }

  return (
    <div className='row d-flex justify-content-center gap-3'>
      <div className='d-flex justify-content-end px-5'>
        <button onClick={clearCart} className="btn btn-outline-secondary">🗑</button>
      </div>
      <div className='col-7 border rounded shadow p-3 bg-primary bg-opacity-50 d-flex justify-content-center'>
        <div className='d-flex flex-column'>
          {carrito.length ?
            carrito.map((producto) => <CartCard key={producto.id} prop={producto} />)
            :
            <div className='text-center align-self-center'>
              <h5>No tienes productos en tu carrito de compras</h5>
              <Link className="btn" to="/">Inicio</Link>
            </div>}
        </div>
      </div>
      <div className='col-3 row border rounded gap-3 limite ms-2 shadow p-3'>
        <h4>Total: ${totalSuma}</h4>
        {habilitar ?
          <Form activar={activarCompra} datoNombre={setNombre} datoEmail={setEmail} datoCel={setCel} datoApellido={setApellido} />
          :
          <button className={`btn border-dark ${habilitar}`} onClick={comprar}>Finalizar Compra</button>}
      </div>
    </div>
  )
}
export default CartContainer