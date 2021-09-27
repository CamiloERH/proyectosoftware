import axios from 'axios';

const clienteAxios = axios.create({
    // baseURL: 'https://agendaappserver.herokuapp.com/'
    baseURL: 'http://localhost:4000/'
});

export default clienteAxios;