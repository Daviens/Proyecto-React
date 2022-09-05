import React from 'react'
import Item from '../Item'

const ItemList = ({prueba}) => {
    
  return (
    <div className='row gap-4 justify-content-center my-4'>
        {prueba.map(objeto => {
           return <Item key={objeto.id} objeto={objeto}/>
        })}
    </div>
  )
}

export default ItemList