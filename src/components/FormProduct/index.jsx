import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ProductService from '../../services/productSevice';
const FormProduct = () => {
    const MySwal = withReactContent(Swal)
    const productService = new ProductService()
    const msgError = (message) => {
        MySwal.fire({
            title: `${message}`,
            icon: 'error',
        })
    }
    const enviarForm = async (e) => {
        e.preventDefault()
        const price = e.target.price.value;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const stock = e.target.stock.value;
        const thumbnail = e.target.thumbnail.files[0];
        if (title && thumbnail && price && stock && category) {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('thumbnail', thumbnail);
            formData.append('price', price);
            formData.append('stock', stock);
            formData.append('category', category);
            try {
                await productService.postProduct(formData)
            } catch (error) {
                msgError(error.response);
            }
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            <form className="col-sm-6" onSubmit={enviarForm} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" className="form-control" id="title" name='title' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">category</label>
                    <input type="text" className="form-control" id="category" name='category' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input type="number" className="form-control" id="price" name='price' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">stock</label>
                    <input type="number" className="form-control" id="stock" name='stock' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="thumbnail" className="form-label">thumbnail</label>
                    <input type="file" className="form-control" id="thumbnail" name='thumbnail' />
                </div>
                <button type='submit' className='btn border-success'>Enviar datos</button>
            </form>
        </div>
    )
}

export default FormProduct