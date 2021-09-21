import React, { useReducer } from 'react';

import horarioReducer from './horarioReducer';

import HorarioContext from './horarioContext';

import { OBTENER_HORARIOS } from '../../types';

const HorarioState = (props) => {


    const horasDummy = [{   
        Servicio: 0,
        Fecha: {dia: 20, mes: 'Noviembre', ano: 2021 },
        Hora: '10:25',
    },
    {
        Servicio: 0,
        Fecha: {dia: 25, mes: 'Diciembre', ano: 2021 },
        Hora: '10:25',
    },
    {
        Servicio: 1,
        Fecha: {dia: 25, mes: 'Septiembre', ano: 2021 },
        Hora: '10:25',
    },
    {
        Servicio: 1,
        Fecha: {dia: 22, mes: 'Noviembre', ano: 2021 },
        Hora: '10:25',
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