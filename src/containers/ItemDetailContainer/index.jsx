import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {

  const [oneItem, setOneItem] = useState({})

  useEffect(() => {
    const getItem = (async () =>{
      const getOneItem = await fetch("https://api.mercadolibre.com/items?ids=MLA1107959293")
      try {
        const response = await getOneItem.json()
        const elemento = response.pop()
        const { body: producto} = elemento
        console.log(producto);
        setOneItem(producto)
      } catch (error) {
        console.log(error);
      }
    })
    getItem()
  }, [])
  
  return (
    <div className='row'>
      <ItemDetail prop={oneItem} className="col-12"/>
    </div>
  )
}

export default ItemDetailContainer