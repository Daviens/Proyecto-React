import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])

  const isInCart = (id) => {
    return carrito.some(producto => producto.id === id)
  }

  const removeItem = (itemId) => {
    if (isInCart(itemId)) {
      const carroCortado = carrito.map((producto) => {
        if (producto.id === itemId) {
          carroCortado.splice(indexOf(producto), 1)
          return
        }
        return producto
      })
    } else {
      console.log("no se puede eliminar este item ya que no existe");
    }
  }

  const clearCart = () => {
    setCarrito([])
  }

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const carroMapeado = carrito.map((producto) => {
        if (producto.id === item.id) {
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