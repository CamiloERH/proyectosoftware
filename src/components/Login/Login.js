import "./Login.css";
import React, { useState } from "react";


const Login = () => {


    


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        
    const handleSubmitClick = (e) => {
        e.preventDefault();
        console.log("Listeke");
       
    }



    return(

        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <label>Ingrese su correo</label>
                <input className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} type="email"></input>

                <label>Ingrese contraseña</label>
                <input className="form-control" value={password} type="password" onChange={(e)=> setPassword(e.target.value)}></input>

                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Ingresarr</button>

            </form>      

            
        </div>
    )
}

export default Login;
