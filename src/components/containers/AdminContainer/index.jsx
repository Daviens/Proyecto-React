import React, { useEffect } from 'react'
import FormProduct from '../../FormProduct'
import { useNavigate } from 'react-router-dom'
import UserService from '../../../services/userService'

const AdminContainer = () => {
    const nav = useNavigate()
    const userService = new UserService()
    useEffect(() => {
      const getData = async () => {
        const info = await userService.getData()
        info.data.message.role === "AUTHENTICATED"? true : nav("/")
      }
      getData()
    }, [])
    return (
      <div>
        <div className='row mx-5'>
          <FormProduct/>
        </div>
      </div>
    )
}

export default AdminContainer