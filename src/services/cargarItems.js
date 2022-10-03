import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const cargarProductos = async () => {
    const conjunto = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA3794&limit=20")
    const conjuntoParseado = await conjunto.json()
    const listaProductos = conjuntoParseado.results

    listaProductos.forEach(async (producto) => {
        const unObjeto = await fetch(`https://api.mercadolibre.com/items/${producto.id}`)
        const objetoParseado = await unObjeto.json()
        const listaImagenes = objetoParseado.pictures
        let imagenesFinal = []
        listaImagenes.forEach((img) => {
            imagenesFinal.push({url: img.url})
        })
        const docRef = await addDoc(collection(db, "products"), {
            title: producto.title,
            price: producto.price,
            category_id: producto.category_id,
            stock: producto.available_quantity,
            pictures: imagenesFinal,
            thumbnail: producto.thumbnail
        });
        console.log("Document written with ID: ", docRef.id);
    })
}

export default cargarProductos;