import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmailVerification from './pages/EmailVerification';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/verify' element={<EmailVerification />} />
        <Route exact path='/user' element={<UserDashboard />} />
        <Route exact path='/admin' element={<AdminDashboard />} />
        <Route exact path='/error' element={<Error message={'Some Error Message'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
