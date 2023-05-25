import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'

const CartCard = ({ prop }) => {
    const { removeItem } = useContext(Shop)

    const handleRemove = () => {
        removeItem(prop._id)
    }

    return (
        <div className="card mb-3 shadow">
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={prop.thumbnail} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className='d-flex justify-content-end'>
                            <button onClick={handleRemove} className="btn btn-outline-danger">X</button>
                        </div>
                        <h4 className="card-title">{prop.title}</h4>
                        <h5 className="card-text">${prop.price}</h5>
                        <p className="card-text">Cantidad: {prop.cantidad}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard