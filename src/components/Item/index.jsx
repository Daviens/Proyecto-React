import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Item = ({ objeto }) => {
  const navegacion = useNavigate()
  const handleNav = () => {
    navegacion(`/detail/${objeto._id}`)
  }
  return (
    <div className="card mb-3 shadow seleccion" onClick={handleNav}>
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center">
          <img src={objeto.thumbnail} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{objeto.title}</h5>
            <p className="card-text">${objeto.price}</p>
            <p className="card-text"><small className="text-muted">Stock: {objeto.stock}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item