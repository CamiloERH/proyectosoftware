import "./Login.css";
import React, { useState } from "react";


const Login = () => {


    


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        console.log({
          "mail":email,
          "password":password
        })
        event.preventDefault();
      }



    return(

        <div className="Login">
            <form>
                <label>Ingrese su correo</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email"></input>

                <label>Ingrese contraseña</label>
                <input value={password} type="password" onChange={(e)=> setPassword(e.target.value)}></input>

                <button type="submit" onClick={handleSubmit}>Ingresar</button>

            </form>            
                <p>Datos {email}</p>
            
        </div>
    )
}

export default Login;
