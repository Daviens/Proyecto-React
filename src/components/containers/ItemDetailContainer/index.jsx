import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ProductService from '../../../services/productSevice';

const ItemDetailContainer = () => {

  const [oneItem, setOneItem] = useState({})
  const [imagenes, setImagenes] = useState([])
  const { productId } = useParams()
  const navegar = useNavigate()
  const MySwal = withReactContent(Swal)
  const productService = new ProductService()

  useEffect(() => {
    const getItem = (async () => {
      const query = await productService.getProductById(productId)
      const item = query.data
      try {
        if (item) {
          setOneItem({ ...item })
          setImagenes(item.thumbnail)
        } else {
          MySwal.fire({
            title: 'Error!',
            text: 'No existe un producto con la url especificada',
            icon: 'error',
            confirmButtonText: 'Volver',
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then(() => navegar("/"))
        }
      } catch (error) {
        console.log(error);
      }
    })
    getItem()
  }, [productId])

  return (
    <div className='row'>
      <ItemDetail product={oneItem} imgs={imagenes} className="col-12" />
    </div>
  )
}
export default ItemDetailContainer