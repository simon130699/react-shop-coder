import React,{ useState,useEffect } from "react";


// const productos = [
//     {Name1 : "bici", description1 : "1234", stock1: 5},
//     {Name2 : "camiseta", description2 : "1234", stock2: 5},
//     {Name3 : "moto", description3 : "1234", stock3: 5},
//     {Name4 : "auto", description4 : "1234", stock4: 5}

// ]

// const task = new Promise((res) => {
//   //acciones pueden ser o no asincronicas
//  //res es resuelta si es buena
//  //rej es cuando una promesa esta rechazada
    
//     // setTimeout(() => {
//     //    res(productos)
//     // }, 3000)
//   })


function Promises() {
    // const [productos, setProductos] = useState([])
      
    // task.then(resp => setProductos(resp))
    // task.finally(()=>(
    //   console.log('finalizado')
    //   ))
    //   console.log(productos)
   
  // fetch('https://pokeapi.co/api/v2/pokemon/ditto') //consulta a la api
  // .then(resp => resp.json()) //transforma el json en javascript
  // .then(data => console.log(data)) //captura el dato con .then
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((resp) => resp.json())
      .then((data) => setState(data.results));
  }, []);
  
  return (
    <div>
    {state.map((poke) => (
      <h4>{poke.name}</h4>
    ))}
  </div>
  );
}
export default Promises;



