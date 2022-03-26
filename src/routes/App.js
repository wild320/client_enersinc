import '../styles/App.css';
import Container from '@mui/material/Container';
import {BrowserRouter, Routes ,Route } from 'react-router-dom'
// import {CrearPersona} from '../pages/CrearPersona';
// import {DetallePersona} from '../pages/DetallePersona';
// import {EditarPersona} from '../pages/EditarPersona';
 import {Personas} from '../pages/Personas';
// import {Provider} from 'react-redux';
// import {store} from '../store;'
// import moment from 'moment';
// import 'moment/local/es'
// moment.locale('es')


function App() {
  return (
    <div className="App">  
      
      { <header className="App-header">
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Personas/>} />
              <Route exact path="/Personas/:id" element={<Personas/>}></Route>       
            
            </Routes>
            </BrowserRouter>
        </Container>
        
      </header> }
    </div>
  );
}

export default App;
