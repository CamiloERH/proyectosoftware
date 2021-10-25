import { AGENDAR_HORA, OBTENER_HORARIOS, OBTENER_SERVICIOS, 
    SERVICIO_ACTUAL, OBTENER_AGENDAS } from "../../types";

const horarioReducer = (state, action) => {
    switch(action.type){
        case SERVICIO_ACTUAL:
            return {
                ...state,
                servicioSeleccionado: action.payload
            }
        case AGENDAR_HORA:
            return {
                ...state,
                horas: state.horas.filter( (hora) => hora._id !== action.payload )
            }
        case OBTENER_HORARIOS:
            return {
                ...state,
                horas: action.payload
            }
        case OBTENER_SERVICIOS:
            return {
                ...state,
                servicios: action.payload
            }
        case OBTENER_AGENDAS:
            return {
                ...state,
                agendas: action.payload
            }

        default:
            return state;
    }
}

export default horarioReducer;