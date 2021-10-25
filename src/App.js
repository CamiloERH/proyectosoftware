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

const token = localStorage.getItem('token');

if( token ){
  tokenAuth(token);
}


function App() {

  return (
<<<<<<< HEAD
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
              <Route exact path="/contact" component={() => <div>Contacto</div>}/>
              <RutaPrivada exact path="/agenda" component={Agenda} />
              <RutaPrivada exact path="/schedules" component={Horarios} />
            </Switch>
          </BrowserRouter>
        </HorarioState>
      </AuthState>
    </AlertaState>
=======


  

    <HorarioState>
      <BrowserRouter>
        <Header/>

        <Switch>
          <Route exact path="/" component={() => 
            <div className="container">
              <p>Bienvenidoss</p>

              
          

            </div>}
          />        
          <Route exact path="/condiciones" component={Condiciones}/>         
          <Route exact path="/services" component={Servicios}/>
          <Route exact path="/contact" component={() => <div>Contacto</div>}/>
          <Route exact path="/schedules" component={() => <Horarios/> } />
        </Switch>
      </BrowserRouter>
    </HorarioState>
>>>>>>> f737b006e40d3cf0c296627f28de9cab32f37062
  );
}

export default App;
