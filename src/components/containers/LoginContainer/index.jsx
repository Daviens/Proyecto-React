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
    <div>
      <FormLogin/>
      <FormRegister/>
    </div>
  )
}

export default LoginContainer