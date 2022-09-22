import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {

  const [oneItem, setOneItem] = useState({})
  const [imagenes, setImagenes] = useState([])
  const {productId} = useParams()

  useEffect(() => {
    const getItem = (async () =>{
      const getOneItem = await fetch(`https://api.mercadolibre.com/items/${productId}`)
      try {
        const response = await getOneItem.json()
        setOneItem(response)
        const {pictures} = response
        setImagenes(pictures)
      } catch (error) {
        console.log(error);
      }
    })
    getItem()
  }, [productId])
  
  return (
    <div className='row'>
      <ItemDetail prop={oneItem} imgs={imagenes} className="col-12"/>
    </div>
  )
}

export default ItemDetailContainer