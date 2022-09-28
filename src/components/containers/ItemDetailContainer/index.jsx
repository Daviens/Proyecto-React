import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';

const ItemDetailContainer = () => {

  const [oneItem, setOneItem] = useState({})
  const [imagenes, setImagenes] = useState([])
  const { productId } = useParams()

  useEffect(() => {
    const getItem = (async () => {
      const docRef = doc(db, "products", `${productId}`);
      const docSnap = await getDoc(docRef);
      try {
        if (docSnap.exists()) {
          setOneItem(docSnap.data())
          const { pictures } = docSnap.data()
          setImagenes(pictures)
        } else {
          console.log("No such document!");
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