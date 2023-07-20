import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"

const Parte2 = () => {

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

    const cargarNumeros = () => {
        let numerosSelect = document.getElementById("numeros");
        for (let i = 0; i <= 30; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            numerosSelect.appendChild(option)
        }
        cargarNumeros({option});
    }
  
  
    return (
      <> 
      <h1>Formulario</h1> <br/>
      <p>Ingresa valores numéricos:</p>
      <label>
        <select type="number" value={number} onChange={(e) => cargarNumeros()}/> 
      </label>
      <button onClick={calcularFactorial}>Enviar</button> <br/>
      <p>{factorial}</p>
      </>
    );
  }
  
  export default Parte2;