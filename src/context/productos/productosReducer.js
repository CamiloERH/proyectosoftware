import { MOSTRAR_PRODUCTOS } from "../../types";

const productosReducer = (state, action) => {
    switch(action.type){
        case MOSTRAR_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }

        default:
            return state;
    }
}

export default productosReducer;