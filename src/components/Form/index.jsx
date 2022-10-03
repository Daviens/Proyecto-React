import React from 'react'

const Form = ({activar, datoNombre, datoEmail, datoCel}) => {
    
    const enviarForm = (e) => {
        e.preventDefault()
        datoNombre(e.target.nombre.value)
        datoEmail(e.target.email.value)
        datoCel(e.target.cel.value)
        activar(" ")
    }
    return (
        <div>
            <form onSubmit={enviarForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cel" className="form-label">Celular</label>
                    <input type="number" className="form-control" id="cel" name='cel' required/>
                </div>
                <button type='submit' className='btn border-success'>Enviar datos</button>
            </form>
        </div>
    )
}

export default Form