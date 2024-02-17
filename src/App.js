import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmailVerification from './pages/EmailVerification';
import Error from './components/Error';
import Tasks from './pages/Tasks';
import Expenses from './pages/Expenses';
import Journals from './pages/Journals';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/verify' element={<EmailVerification />} />
        <Route exact path='/user' element={<UserDashboard />}>
          <Route exact path='tasks' element={<Tasks />} />
          <Route exact path='expenses' element={<Expenses />} />
          <Route exact path='journals' element={<Journals />} />
          <Route exact path='profile' element={<Profile />} />
        </Route>
        <Route exact path='/admin' element={<AdminDashboard />} >
          <Route exact path='tasks' element={<Tasks />} />
          <Route exact path='expenses' element={<Expenses />} />
          <Route exact path='journals' element={<Journals />} />
          <Route exact path='profile' element={<Profile />} />
        </Route>
        <Route exact path='*' element={<Error message={'Page doesnot exists'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
