import React, { useReducer } from 'react';

import horarioReducer from './horarioReducer';

import HorarioContext from './horarioContext';

const HorarioState = (props) => {
    const initialState = {
        horas: [
            {
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
            }
        ]
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(horarioReducer, initialState);


    return (
        <HorarioContext.Provider
            value={{
                horas: state.horas
            }}
        >
            {props.children}
        </HorarioContext.Provider>
    );
}

export default HorarioState;