import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greetings}) => {
  //boton contador
  const showAdd = (cantidad) => {
    alert(`Se agregó ${cantidad} a su carrito de compras`)
  }
  //consumo de API/Promise

  const [productos, setProductos] = useState([])

  const arrayDeProductos = [
    {id: 1, title: "Mago", price: "$15",description: "Un gato mago", pictureUrl: "../../imagenes/mago.jpg"},
    {id: 2, title: "Guerrero", price: "$20",description: "Un gato guerrero", pictureUrl: "../../imagenes/guerrero.jpg"},
    {id: 3, title: "Arquero", price: "$25",description: "Un gato arquero", pictureUrl: "../../imagenes/arquero.jpg"}
  ]

  useEffect(() => {
    (async () => {
      const promesa = new Promise((res, reject) => {
        setTimeout(res(arrayDeProductos), 2000)
      })
      try{
        const respuesta = await promesa
        setProductos(respuesta)
      }catch{
        console.log(reject)
      };
    })();
  }, [])
  
  return (
    <div>
      <h3>{greetings}</h3>
      <ItemCount stock={12} initial={1} onAdd={showAdd}/>
      <ItemList prueba={productos}/>
    </div>
  )
}

export default ItemListContainer