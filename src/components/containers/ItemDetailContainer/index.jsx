import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ItemDetailContainer = () => {

  const [oneItem, setOneItem] = useState({})
  const [imagenes, setImagenes] = useState([])
  const { productId } = useParams()
  const navegar = useNavigate()
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    const getItem = (async () => {
      const docRef = doc(db, "products", `${productId}`);
      const docSnap = await getDoc(docRef);
      try {
        if (docSnap.exists()) {
          setOneItem({ id: docSnap.id, ...docSnap.data() })
          const { pictures } = docSnap.data()
          setImagenes(pictures)
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
      <ItemDetail prop={oneItem} imgs={imagenes} className="col-12" />
    </div>
  )
}
export default ItemDetailContainer