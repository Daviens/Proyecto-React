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

  useEffect(() => {
    (async () => {
      const promesa = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA3794&limit=20")
      try{
        const respuesta = await promesa.json()
        const { results } = respuesta
        setProductos(results)
      }catch(error){
        console.log(error)
      };
    })();
  }, [])
  
  return (
    <div>
      <h3>{greetings}</h3>
      <ItemCount stock={12} initial={1} onAdd={showAdd}/>
      <div className='row mx-5'>
        <ItemList props={productos}/>
      </div>
    </div>
  )
}

export default ItemListContainer