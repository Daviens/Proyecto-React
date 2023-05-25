import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../ItemList'
import ProductService from '../../../services/productSevice'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchProds = async() => {
      const prodService = new ProductService()
      try{
        const response = !categoryId ? await prodService.getProducts() : await prodService.getProductsbyCategory(categoryId)
        setProductos(response.data)
      } catch(error){
        console.log(error);
      }
    }
    fetchProds()

  }, [categoryId])

  return (
    <div>
      <div className='row mx-5'>
        <ItemList props={productos} />
      </div>
    </div>
  )
}
export default ItemListContainer