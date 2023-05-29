import React, { useContext, useEffect } from 'react'
import FormRegister from '../../FormRegister'
import FormLogin from '../../FormLogin'
import UserService from '../../../services/userService'
import { Shop } from '../../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const LoginContainer = () => {
  const {setUser} = useContext(Shop)
  const userService = new UserService()
  const nav = useNavigate()
  useEffect(() => {
    const existCookie = async () => {
      const response = await userService.getData()
      if(response.data.status === "success"){
        setUser(response.data.message)
        nav("/home")
      }
    }
    existCookie()
  }, [])
  return (
    <div
      className="d-flex justify-content-around p-5 m-0"
      style={{
        background: 'linear-gradient(to right, #667eea, #764ba2)',
        minHeight: '100vh',
      }}
    >
      <div className="card border-primary border-opacity-50 rounded-top p-4 m-0">
        <p className="card-title text-center">¡Ingresa!</p>
        <div className="card-body">
          <FormLogin />
        </div>
      </div>
      <div className="card border-primary border-opacity-50 rounded-top p-4">
        <p className="card-title text-center">¡Regístrate!</p>
        <div className="card-body">
          <FormRegister />
        </div>
      </div>
    </div>
  )
}

export default LoginContainer