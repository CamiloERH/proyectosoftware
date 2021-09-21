import { OBTENER_HORARIOS } from "../../types";

const horarioReducer = (state, action) => {
    switch(action.type){

        case OBTENER_HORARIOS:
            return {
                ...state,
                horas: action.payload
            }

        default:
            return state;
    }
}

export default horarioReducer;