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
      <div className='row m-0 px-5' style={{
        background: 'linear-gradient(to right, #667eea, #764ba2)',
        minHeight: '100vh',
      }}>
        <ItemList props={productos} />
      </div>
    </div>
  )
}
export default ItemListContainer