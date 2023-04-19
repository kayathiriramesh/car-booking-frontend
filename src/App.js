import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import AddCar from './pages/AddCar';
import UserBookings from './pages/UserBookings';
import EditCar from './pages/EditCar';
import AdminHome from './pages/AdminHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking/:carid' element={<BookingCar />} />
          <Route path='/userbookings' element={<UserBookings />} />
          <Route path='/addcar' element={<AddCar />} />
          <Route path='/editcar/:carid' element={<EditCar />} />
          <Route path='/admin' element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
