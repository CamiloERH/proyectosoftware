import React, { useContext, useEffect } from 'react';

import productosContext from '../context/productos/productosContext';

const Products = () => {

    const { productos, obtenerProductos } = useContext(productosContext);
    console.log(productos)

    useEffect(()=>{
        obtenerProductos()
    },)
     
    return (  
        
        <div>Aers :(</div>
    );
}
 
export default Products;