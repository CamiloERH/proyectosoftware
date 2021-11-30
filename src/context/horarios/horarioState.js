import React, { useReducer } from 'react';

import clienteAxios from '../../config/axios';

import horarioReducer from './horarioReducer';
import HorarioContext from './horarioContext';

import { AGENDAR_HORA, 
    OBTENER_HORARIOS, 
    OBTENER_SERVICIOS, 
    SERVICIO_ACTUAL,
    OBTENER_AGENDAS
} from '../../types';

const HorarioState = (props) => {

    const initialState = {
        servicioSeleccionado: null,
        servicios: [],
        horas: [], 
        agendas: []  
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(horarioReducer, initialState);

    //Funcion para obtener horarios a partir del servicio
    const obtenerServicios = async () => {
        const resultado = await clienteAxios.get(`/api/servicios`);
        dispatch({
            type: OBTENER_SERVICIOS,
            payload: resultado.data.servicios
        });
    }

    const obtenerHorarios = async (idServicio) => {
        
        const resultado = await clienteAxios.get(`/api/horas/${idServicio}`);
        dispatch({
            type: OBTENER_HORARIOS,
            payload: resultado.data.horas
        });
    }
    
    const agendarHora = async (idHora, idCliente) => {
        try {
            await clienteAxios.post(`api/agenda`, {idHora, idCliente});
            dispatch({
                type: AGENDAR_HORA,
                payload: idHora
            });
        } catch (error) {
            console.log(error);
        }    
    }

    const seleccionarServicio = (idServicio) => {
        dispatch({
            type: SERVICIO_ACTUAL,
            payload: idServicio
        });
    }

    const obtenerAgendas = async (idCliente) => {
        try {
            const resultado = await clienteAxios.get(`api/agenda?idCliente=${idCliente}`);

            dispatch({
               type: OBTENER_AGENDAS,
               payload: resultado.data.agendas
            });
        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <HorarioContext.Provider
            value={{
                horas: state.horas,
                servicios: state.servicios,
                servicioSeleccionado: state.servicioSeleccionado,
                agendas: state.agendas,
                obtenerHorarios,
                obtenerServicios, 
                agendarHora,
                seleccionarServicio,
                obtenerAgendas
            }}
        >
            {props.children}
        </HorarioContext.Provider>
    );
}

export default HorarioState;
