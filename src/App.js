import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {

  const greet= 'soy un string que viene de app.js'
   

  return (
    <> 
        <NavBar />

        <ItemListContainer greeting={greet} />
    </>
  );
}

export default App;
