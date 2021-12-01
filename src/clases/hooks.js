import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [fecha, setFecha] = useState(Date());


    useEffect(()=>{
      console.log('llamada a api 1')

    }, []) //se ejecuta en segunda instancia
    useEffect(()=>{
      console.log('llamada a api 2')

    }, []) //se ejecuta en segunda instancia

    
  const Click = () => {
    setFecha(Date(fecha));
  }

  return (
  <div>
    <p>{fecha}</p>
    <button onClick={Click}> click </button>
  </div>
  );
}