import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])
  const [user, setUser] = useState(null)

  const isInCart = (id) => {
    return carrito.some(producto => producto._id === id)
  }

  const removeItem = (itemId) => {
    const productosFiltrados = carrito.filter((producto) => producto._id !== itemId)
    setCarrito(productosFiltrados)
  }

  const clearCart = () => {
    setCarrito([])
  }

  const addItem = (item, quantity) => {
    if (isInCart(item._id)) {
      const carroMapeado = carrito.map((producto) => {
        if (producto._id === item._id) {
          producto.cantidad += quantity
          return producto
        }
        return producto
      })
      setCarrito(carroMapeado)
    } else {
      const itemPlusQty = { ...item, cantidad: quantity }
      const carroDuplicado = [...carrito, itemPlusQty]
      setCarrito(carroDuplicado)
    }
  }

  const total = () => {
    return carrito.reduce((acc, elem) => acc += (elem.cantidad * elem.price), 0)
  }

  return (
    <Shop.Provider value={{ carrito, user, setUser, addItem, removeItem, clearCart, total, setCarrito }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider