
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Componant/Nav'
import Footer from './Componant/Footer';
import Signup from './Componant/Signup';
import PrivateCompronant from './Componant/PrivateCompronant';
import Login from './Componant/Login';
import Addproduct from './Componant/Addproduct';
import Productlist from './Componant/Productlist';
import UpdateProduct from './Componant/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateCompronant />}>
            <Route path='/' element={<Productlist/>} />
            <Route path='/add' element={<Addproduct/>}/>
            <Route path='/update/:id' element={<UpdateProduct/>}/>
            <Route path='/logout' element={<h1>logout</h1>} />
            <Route path='/profile' element={<h1>profile</h1>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
