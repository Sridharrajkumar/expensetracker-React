
import './App.css';
import Store from './Component/Pages/Store';
import ENav from './Component/Navbar/ENav';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Signup from './Component/Log/Signup';
import UpdateProfile from './Component/Store/UpdateProfile';
import VerificationEmail from './Component/Store/VerificationEmail';
import ForgetPassword from './Component/Log/ForgetPassword';
import {  useSelector } from 'react-redux';
import CheckUserLogged from './Component/Log/CheckUserLogged';


function App() {

  const authSelector = useSelector(state => state.auth.isLogged);

  return (
    <div>
      <CheckUserLogged />
      <ENav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Login' element={<Signup />} />
        { authSelector && <Route exact path="/store" element={<Store />} />}
        { authSelector  && <Route path="/updateprofile" element={<UpdateProfile />} />}
        { authSelector && <Route exact path="/verification" element={<VerificationEmail />} />}
        <Route path="/forgotpass" element={<ForgetPassword />} />
        <Route path='*' element={<Signup />} />
      </Routes>
   </div>
  );
}

export default App;
