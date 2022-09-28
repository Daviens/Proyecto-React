import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../ItemList'
import { db } from '../../../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greetings }) => {

  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    (async () => {
      try {
        const q = categoryId ?
          query(collection(db, "products"), where("category_id", "==", categoryId))
          :
          query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productosFirebase = [];
        querySnapshot.forEach((doc) => {
          productosFirebase.push({ id: doc.id, ...doc.data() })
        });
        setProductos(productosFirebase)
      } catch (error) {
        console.log(error)
      };
    })();
  }, [categoryId])

  return (
    <div>
      <h3>{greetings}</h3>
      <div className='row mx-5'>
        <ItemList props={productos} />
      </div>
    </div>
  )
}
export default ItemListContainer