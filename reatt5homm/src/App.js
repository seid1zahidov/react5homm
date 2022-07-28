import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './pages/Index';
import Products from './pages/Products';
import Addproduct from './pages/Addproduct';
import Header from './pages/Header';


function App() {
  if (localStorage.getItem('basket') === null) {
      localStorage.setItem('basket' , JSON.stringify([]))
  }
  return (
    <div className="App">
        <BrowserRouter>
        <Header />

          <Routes>
            <Route path='/' element = {<Index />}/>
            <Route path='/Products' element = {<Products />}/>
            <Route path='/Addproduct' element = {<Addproduct/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
