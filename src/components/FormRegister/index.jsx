import React, { useContext } from 'react'
import UserService from '../../services/userService';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'sweetalert2/src/sweetalert2.scss'
import { Shop } from '../../context/CartContext';
const FormRegister = () => {
    const {setUser} = useContext(Shop)
    const MySwal = withReactContent(Swal)
    const msgError = (message) => {
        MySwal.fire({
            title: `${message}`,
            icon: 'error',
        })
    }
    const enviarForm = async (e) => {
        e.preventDefault()
        const userService = new UserService()
        const email = e.target.emailR.value;
        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value;
        const avatar = e.target.avatar.files[0];
        const password = e.target.passwordR.value;
        if (email && nombre && apellido && password) {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('nombre', nombre);
            formData.append('apellido', apellido);
            formData.append('avatar', avatar);
            formData.append('password', password);
            try {
                const response = await userService.register(formData)
                const userInfo = {email, nombre, apellido}
                setUser(userInfo)
            } catch (error) {
                msgError(error.response.data.error);
            }
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            <form className="col-sm-6" onSubmit={enviarForm} >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" name='apellido' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='emailR' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" name='passwordR' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">Avatar</label>
                    <input type="file" className="form-control" id="avatar" name='avatar' />
                </div>
                <button type='submit' className='btn border-success'>Enviar datos</button>
            </form>
        </div>
    )
}

export default FormRegister