import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({prop, imgs}) => {

  //boton contador
  const showAdd = (cantidad) => {
    alert(`Se agregó ${cantidad} a su carrito de compras`)
  }
  return (
    <div className='container row'>
      <div id="carouselExampleControls" className="carousel carousel-dark slide col-md-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {imgs.map((elem) => {
            return <div key={elem.id} className="carousel-item active">
                      <img src={elem.url} className="d-block w-100" alt="..."/>
                    </div>
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='col-md-7'>
        <h2>{prop.title}</h2>
        <h3>${prop.price}</h3>
        <ItemCount stock={12} initial={1} onAdd={showAdd}/>
      </div>
    </div>
  )
}

export default ItemDetail





