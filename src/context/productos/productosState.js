import React, { useReducer } from 'react';

import clienteAxios from '../../config/axios';

import productosReducer from './productosReducer';
import productosContext from './productosContext';



import { MOSTRAR_PRODUCTOS } from '../../types';

const ProductosState = (props) => {

    const initialState = {
        productos: []  
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(productosReducer, initialState);

    //Funcion para obtener horarios a partir del servicio
    const obtenerProductos = async () => {
        const resultado = await clienteAxios.get(`/api/productos`);
        dispatch({
            type: MOSTRAR_PRODUCTOS,
            payload: resultado.data.productos
        });
    }    

    return (
        <productosContext.Provider
            value={{                
                productos: state.productos,
                obtenerProductos,  
            }}
        >
            {props.children}
        </productosContext.Provider>
    );
}

export default ProductosState;
