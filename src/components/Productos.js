
const Productos = (params) => {
    const arreglo = [1,2,3,4,5,6,7,8,9,10]
    const url = "https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-products-images%2Fp-cvl17052414-1-bb770391-790b-4137-b3b0-b062bef5569b.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=5ed107f33a8817399c5602c2a30308b3"
    const data = "Espectacular kit de permanente de pestañas, para una eficaz ondulación de tus pestañas y un acabado maravilloso. Incluye:Líquido permanente (Rosado)"
    return(
        <div className="container">

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    arreglo.map((val,key)=>(
                        <div className="col" key={key}>
                            <div className="card h-100">
                            <img src={url} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">KIT LIFTING PESTAÑAS ONDULACIÓN PERMANENTE COMPLETO</h5>
                                <p className="card-text">{data}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>  
                    ))
                }        
      
            </div>



        </div>
    )
}

export default Productos;