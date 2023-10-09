
import './App.css';
import Store from './Component/Pages/Store';
import ENav from './Component/Navbar/ENav';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Signup from './Component/Log/Signup';
import UpdateProfile from './Component/Store/UpdateProfile';
import { useContext } from 'react';
import { AuthContext } from './ContxtStore/AuthContext';
import VerificationEmail from './Component/Store/VerificationEmail';
import ForgetPassword from './Component/Log/ForgetPassword';


function App() {
  const authcxt = useContext(AuthContext);
  return (
    <div>
      <ENav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Login' element={<Signup />} />
        {authcxt.islogged && <Route exact path="/store" element={<Store />} />}
        {authcxt.islogged && <Route path="/updateprofile" element={<UpdateProfile />} />}
        {authcxt.islogged && <Route exact path="/verification" element={<VerificationEmail />} />}
        <Route path="/forgotpass" element={<ForgetPassword />} />
        <Route path='*' element={<Signup />} />
      </Routes>
   </div>
  );
}

export default App;
