import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';

function App() {
  return (
  <BrowserRouter>
      <div className="d-flex flex-column"><Header/></div>
      
      <div className="content">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
      
      </BrowserRouter>      
  );
}

export default App;
