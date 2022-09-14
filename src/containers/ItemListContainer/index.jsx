import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greetings}) => {
  
  //consumo de API/Promise
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  console.log(categoryId);

  useEffect(() => {
    (async () => {
      try{
        if(categoryId){
          const pedido = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=20`)
          const respuesta = await pedido.json()
          const {results} = respuesta
          setProductos(results)
        }else{
          const pedido = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA3794&limit=20`)
          const respuesta = await pedido.json()
          const {results} = respuesta
          setProductos(results)
        }
      }catch(error){
        console.log(error)
      };
    })();
  }, [categoryId])
  
  return (
    <div>
      <h3>{greetings}</h3>
      <div className='row mx-5'>
        <ItemList props={productos}/>
      </div>
    </div>
  )
}

export default ItemListContainer