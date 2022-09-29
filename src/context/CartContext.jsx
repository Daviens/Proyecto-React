import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])

  const isInCart = (id) => {
    return carrito.some(producto => producto.id1 === id)
  }

  const removeItem = (itemId) => {
    const productosFiltrados = carrito.filter((producto) => producto.id1 !== itemId)
    setCarrito(productosFiltrados)
  }

  const clearCart = () => {
    setCarrito([])
  }

  const addItem = (item, quantity) => {
    if (isInCart(item.id1)) {
      const carroMapeado = carrito.map((producto) => {
        if (producto.id1 === item.id1) {
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

  return (
    <Shop.Provider value={{ carrito, addItem, removeItem, clearCart }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider