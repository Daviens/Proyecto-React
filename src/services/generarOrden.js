const generarOrden = (nombre, email, telefono, apellido, carrito, total) => {
  return {
    buyer: {
      nombre: nombre,
      email: email,
      telefono: telefono,
      apellido: apellido
    },
    items: carrito,
    total: total,
    createdAt: new Date().toLocaleString()
  }
}

export default generarOrden