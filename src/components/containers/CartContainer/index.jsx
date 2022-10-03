import React, { useContext, useState } from 'react'
import CartCard from '../../CartCard'
import Form from '../../Form'
import { Shop } from '../../../context/CartContext'
import "./styles.css"
import generarOrden from '../../../services/generarOrden'
import { Link } from 'react-router-dom'
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../../firebase/config'
import Swal from 'sweetalert2'

const CartContainer = () => {
  const { carrito, clearCart, total } = useContext(Shop)
  const totalSuma = total()
  const [ordenId, setOrdenId] = useState()
  const [habilitar, setHabilitar] = useState("disabled")
  const [email, setEmail] = useState()
  const [cel, setCel] = useState()
  const [nombre, setNombre] = useState()
  const [compraFinalizada, setCompraFinalizada] = useState(false)

  const activarCompra = (algo) => {
    setHabilitar(algo)
  }

  const comprar = async () => {
    const orden = generarOrden(nombre, email, cel, carrito, totalSuma)
    console.log(orden);
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
    setHabilitar("disabled")
    setCompraFinalizada(true)
  }
  
  compraFinalizada && Swal.fire(
    'Gracias por tu compra!',
    `Aquí tienes tu numero de orden: ${ordenId}`,
    'info'
  )
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
        {habilitar == "disabled" ?
          <Form activar={activarCompra} datoNombre={setNombre} datoEmail={setEmail} datoCel={setCel} />
          :
          <button className={`btn border-dark ${habilitar}`} onClick={comprar}>Finalizar Compra</button>}
      </div>
    </div>
  )
}
export default CartContainer