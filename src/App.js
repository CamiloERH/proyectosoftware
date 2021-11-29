import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Horarios } from './components/Horarios';
import RutaPrivada from './components/rutas/RutaPrivada';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';

import HorarioState from './context/horarios/horarioState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';


import { Header } from './ui/Header';
import Servicios from './components/Servicios';
import Condiciones from './components/condiciones';

import tokenAuth from './config/tokenAuth';
import Agenda from './components/Agenda';
import Productos from './components/Productos';
import Contacto from './components/Contacto';

const token = localStorage.getItem('token');

if( token ){
  tokenAuth(token);
}


function App() {

  return (
    <AlertaState>
      <AuthState>
        <HorarioState>
          <BrowserRouter>
            <Header/>

            <Switch>
              <Route exact path="/" component={() => 
                <div className="container">
                  <p>Bienvenidos</p>




                </div>}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />          
              <Route exact path="/condiciones" component={Condiciones}/>         
              <Route exact path="/services" component={Servicios}/>
              <Route exact path="/productos" component={Productos}/>
              <Route exact path="/contact" component={Contacto}/>
              <RutaPrivada exact path="/agenda" component={Agenda} />
              <RutaPrivada exact path="/schedules" component={Horarios} />
            </Switch>
          </BrowserRouter>
        </HorarioState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
