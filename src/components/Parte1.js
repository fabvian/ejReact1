import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"

const Parte1 = () => {

    const[number, setNumer] = useState('');
    const [factorial, setFactorial] = useState('');
  
    const calcularFactorial = () => {
      const num = parseInt(number);
      if (isNaN(num) || num < 0) {
        setFactorial("ERROR")
        return;
      }
  
      let resultado = 1;
      for (let i = 2; i < num; i++) {
        resultado *= i;
      }
  
      setFactorial(`El factorial es: ${resultado}`);
    }
  
  
    return (
      <> 
      <h1>Formulario</h1> <br/>
      <p>Ingresa valores numéricos:</p>
      <label>
        <input type="number" value={number} onChange={(e) => setNumer(e.target.value)}/> 
      </label>
      <button onClick={calcularFactorial}>Enviar</button> <br/>
      <p>{factorial}</p>
      </>
    );
  }
  
  export default Parte1;