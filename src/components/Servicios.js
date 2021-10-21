import React from 'react';
import "./servicios.css";
import rimel from './images/rimel.jpeg';
import clasicas from './images/clasicas.jpeg';
import closedFans from './images/closedFans.jpeg';
import lifting from './images/lifting.jpeg';
import { Link } from 'react-router-dom';


const Servicios = () => {
    return (
        <div className="container containerServicios">
            
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100">
    
                     <img src={rimel} class="card-img-top image" alt="..."/>

                    <div class="card-body">
                        <h5 class="card-title">Extensiones efecto rímel</h5>
                        <h6 class="card-title">Valor: $ 22.000</h6>
                        <Link className="enlaces" to="/schedules"><button class="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Más información
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Consiste en colocar dos o tres extensiones de 0,7 o 0,3 milímetros de grosor por cada pestaña natural. La cantidad, el grosor y longitud de las extensiones son elegidas de acuerdo al estudio previo de la pestaña natural de cada persona. Obteniendo así, resultados totalmente personalizadas.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                     <img src={clasicas} class="card-img-top image" alt="..."/> 
                    
                    <div class="card-body">
                        <h5 class="card-title">Extensiones técnica clásica</h5>
                        <h6 class="card-title">Valor: $ 20.000</h6>
                        <Link className="enlaces" to="/schedules"><button class="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                        Más información
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    Pelitos pegados uno a uno sobre el 90% de cada pestaña natural. Ubicados a cierta distancia del párpado y la raíz sin obstruir el folículo. Son de fibra sintética o seda de alta calidad y que mantienen su curvatura.
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
            
                    <img src={closedFans} class="card-img-top image" alt="..."/> 
                    
                    <div class="card-body">
                        <h5 class="card-title">Extensiones closed fans</h5>
                        <h6 class="card-title">Valor: $ 27.000</h6>
                        <Link className="enlaces" to="/schedules"><button class="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                        Más información
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    Consiste en pegar 1 extensión en cada pestaña "pelo a pelo", creando un look natural y sutil. Los retoques se realizan con el 40% de las extensiones.
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
            
                    <img src={lifting} class="card-img-top image" alt="..."/> 

                    <div class="card-body">
                        <h5 class="card-title">Lifting</h5>
                        <h6 class="card-title">Valor: $ 22.000</h6>
                        <Link className="enlaces" to="/schedules"><button class="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                                        Más información
                                    </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    El lifting de pestañas es uno de los tratamientos estéticos más demandados en la actualidad. Con un efecto duradero, asegura resultados y permite olvidar las molestas pestañas postizas. Este tratamiento da expresión a la mirada, especialmente en aquellas personas que acuden a las clínicas estéticas con unas pestañas cortas y con poca densidad.
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Servicios;