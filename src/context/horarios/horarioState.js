import React, { useReducer } from 'react';

import horarioReducer from './horarioReducer';

import HorarioContext from './horarioContext';

import { OBTENER_HORARIOS } from '../../types';

const HorarioState = (props) => {


    const horasDummy = [{   
        Servicio: 1,
        Fecha: "2021-09-16T15:18:05.138Z"
    },
    {
        Servicio: 1,
        Fecha: "2021-09-21T18:57:02.621+00:00"
    },
    {
        Servicio: 2,
        Fecha: "2021-09-25T18:57:02.621+00:00"
    },
    {
        Servicio: 2,
        Fecha: "2021-09-22T18:57:02.621+00:00"
    }];

    const initialState = {
        horas: []
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(horarioReducer, initialState);


    //Funcion para obtener horarios
    const obtenerHorarios = () => {
        dispatch({
            type: OBTENER_HORARIOS,
            payload: horasDummy
        });
    }

    return (
        <HorarioContext.Provider
            value={{
                horas: state.horas,
                obtenerHorarios
            }}
        >
            {props.children}
        </HorarioContext.Provider>
    );
}

export default HorarioState;