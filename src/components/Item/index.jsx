import React from 'react'
import './styles.css'

const Item = ({objeto}) => {
  return (
    <div className="card col-sm-4 text-center shadow">
        <img src={objeto.pictureUrl} className="card-img-top my-2" alt={objeto.description}/>
        <div className="card-body">
            <h5 className="card-title">{objeto.title}</h5>
            <p className="card-text">{objeto.price}</p>
        </div>
    </div>
  )
}

export default Item