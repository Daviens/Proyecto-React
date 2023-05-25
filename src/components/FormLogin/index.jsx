import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import UserService from '../../services/userService'
import { Shop } from '../../context/CartContext'

const FormLogin = () => {
    const MySwal = withReactContent(Swal)
    const {setUser} = useContext(Shop)
    const navigate = useNavigate()
    const msgError = (message) => {
        MySwal.fire({
            title: `${message}`,
            icon: 'error',
        })
    }
    const enviarForm = async (e) => {
        e.preventDefault()
        const userService = new UserService()
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email && password) {
            const formData = {email: email, password: password}
            try {
                const response = await userService.login(formData)
                if(response.status === 200) {
                    setUser(response.data.message)
                    navigate("/home")
                }
            } catch (error) {
                msgError(error.response.data.message);
            }
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            <form className="col-sm-6" onSubmit={enviarForm} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name='email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password2" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password2" name='password' required />
                </div>
                <button type='submit' className='btn border-success'>Enviar datos</button>
            </form>
        </div>
    )
}

export default FormLogin