
import './App.css';
import Store from './Component/Pages/Store';
import ENav from './Component/Navbar/ENav';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Signup from './Component/Log/Signup';


function App() {
  return (
    <div>
      <ENav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Login' element={<Signup />} />
        <Route exact path="/store" element={<Store />} />
        <Route path='*' element={<Signup />} />
      </Routes>
   </div>
  );
}

export default App;
