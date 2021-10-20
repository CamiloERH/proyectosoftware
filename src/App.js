import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Horarios } from './components/Horarios';
import HorarioState from './context/horarios/horarioState';
import { Header } from './ui/Header';
import Servicios from './components/Servicios';
import Condiciones from './components/condiciones';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Profile from './components/Login/Profile/Profile';





function App() {


    


  return (


  

    <HorarioState>
      <BrowserRouter>
        <Header/>

        <Switch>
          <Route exact path="/" component={() => 
            <div className="container">
              <p>Bienvenidos</p>

              
          

            </div>}
          />        
                    
          <Route exact path="/services" component={Servicios}/>
          <Route exact path="/contact" component={() => <div>Contacto</div>}/>
          <Route exact path="/schedules" component={() => <Horarios/> } />
        </Switch>
      </BrowserRouter>
    </HorarioState>
  );
}

export default App;
