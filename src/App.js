import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarTop } from './Components/NavBarTop';
import { Home } from './Components/Home';
import { NavBarBottom } from './Components/NavBarBottom';
import { Login } from './Components/Login';
import { Shop } from './Components/Shop';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import { ProductDetails } from './Components/ProductDetails';


function App() {
  const [cookies] = useCookies(['Cookieee']);

  return (
    
      <div className='App'>
        <BrowserRouter>
          <NavBarTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />  
            <Route
              path='/Shop'
              element={cookies.Cookieee ? <Shop user={cookies.Cookieee} /> : <Navigate to='/Login' />}
            />
            <Route path='/ProductDetails/:productID' element={<ProductDetails/>} />
          </Routes>
          <NavBarBottom />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
