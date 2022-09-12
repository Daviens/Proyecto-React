import React from 'react'

const ItemDetail = ({prop}) => {

  const imagenes = prop.pictures.map((elem) => elem.url)
  return (
    <div className='container row'>
      <div id="carouselExampleControls" className="carousel slide col-md-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagenes[0]} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={imagenes[1]} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={imagenes[2]} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span clasNames="visually-hidden">Next</span>
        </button>
      </div>
      <div className='col-md-7'>
        <h2>{prop.title}</h2>
        <h3>${prop.price}</h3>
      </div>
    </div>
  )
}

export default ItemDetail





