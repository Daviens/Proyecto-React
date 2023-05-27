import React from 'react'
import CartWidget from '../CartWidget'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'
import UserService from '../../services/userService'

const NavBar = () => {
  const { carrito, user } = useContext(Shop)
  const userService = new UserService()
  const nav = useNavigate()
  const logout = async () => {
    const response = await userService.logout()
    if(response.data.status === "success") nav("/")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Evil Compragamer</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {carrito.length ? <CartWidget /> : <></>}
            {user? 
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li> 
              : 
              <></>
            }
            <li className="nav-item">
              <Link className="nav-link" to="/category/Monitor">Monitores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Procesador">Procesadores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Placa de video">Placas de video</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Almacenamiento">Almacenamiento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link>
            </li>
            <li className="nav-item">
              <button onClick={logout} className='btn btn-primary'>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar