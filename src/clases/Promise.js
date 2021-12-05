import React,{ useState } from "react";


const productos = [
    {Name1 : "bici", description1 : "1234", stock1: 5},
    {Name2 : "camiseta", description2 : "1234", stock2: 5},
    {Name3 : "moto", description3 : "1234", stock3: 5},
    {Name4 : "auto", description4 : "1234", stock4: 5}

]

const task = new Promise((res) => {
  //acciones pueden ser o no asincronicas
 //res es resuelta si es buena
 //rej es cuando una promesa esta rechazada
    
    setTimeout(() => {
       res(productos)
    }, 3000)
  })


function Promises() {
    const [productos, setProductos] = useState([])

    task.then(resp => setProductos(resp))
    task.finally(()=>(
      console.log('finalizado')
      ))
      console.log(productos)
  
  return (
    <div>
    
    </div>
  );
}
export default Promises;



