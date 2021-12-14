
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

// import { ItemDetail } from './components/ItemDetail';
// import { ItemDetail } from './components/ItemDetail';
import { ItemDetailCointainer } from './components/ItemDetailCointainer';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';

import { } from './styles/App.css';
// import Promises from './clases/Promise';

function App() {
  



  return (
 
     <BrowserRouter>
     <NavBar />
     <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categorias/:idCategorias" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailCointainer/>}/> 
      </Routes>
      <Footer />
     </BrowserRouter>
          
  
  );
}

export default App;
