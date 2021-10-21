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
            
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
    
                     <img src={rimel} className="card-img-top image" alt="..."/>

                    <div className="card-body">
                        <h5 className="card-title">Extensiones efecto rímel</h5>
                        <h6 className="card-title">Valor: $ 22.000</h6>
                        <Link className="enlaces" to="/schedules"><button className="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Más información
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Consiste en colocar dos o tres extensiones de 0,7 o 0,3 milímetros de grosor por cada pestaña natural. La cantidad, el grosor y longitud de las extensiones son elegidas de acuerdo al estudio previo de la pestaña natural de cada persona. Obteniendo así, resultados totalmente personalizadas.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                     <img src={clasicas} className="card-img-top image" alt="..."/> 
                    
                    <div className="card-body">
                        <h5 className="card-title">Extensiones técnica clásica</h5>
                        <h6 className="card-title">Valor: $ 20.000</h6>
                        <Link className="enlaces" to="/schedules"><button className="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                        Más información
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Pelitos pegados uno a uno sobre el 90% de cada pestaña natural. Ubicados a cierta distancia del párpado y la raíz sin obstruir el folículo. Son de fibra sintética o seda de alta calidad y que mantienen su curvatura.
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
            
                    <img src={closedFans} className="card-img-top image" alt="..."/> 
                    
                    <div className="card-body">
                        <h5 className="card-title">Extensiones closed fans</h5>
                        <h6 className="card-title">Valor: $ 27.000</h6>
                        <Link className="enlaces" to="/schedules"><button className="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                        Más información
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Consiste en pegar 1 extensión en cada pestaña "pelo a pelo", creando un look natural y sutil. Los retoques se realizan con el 40% de las extensiones.
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
            
                    <img src={lifting} className="card-img-top image" alt="..."/> 

                    <div className="card-body">
                        <h5 className="card-title">Lifting</h5>
                        <h6 className="card-title">Valor: $ 22.000</h6>
                        <Link className="enlaces" to="/schedules"><button className="btn btn-primary botones" type="submit">Agendar hora</button></Link>
                        <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                                        Más información
                                    </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
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