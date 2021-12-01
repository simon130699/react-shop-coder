import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { } from './styles/App.css'

function App() {

  const greet= 'soy un string que viene de app.js';
 

  return (
    <div> 
        <NavBar />

        <ItemListContainer greeting={greet} />
    </div>
  );
}

export default App;
