const generarOrden = (nombre, email, telefono, carrito, total) => {
  return {
    buyer: {
        nombre: nombre,
        email: email,
        telefono: telefono
    },
    items: carrito,
    total: total,
    createdAt: new Date().toLocaleString()
  }
}

export default generarOrden