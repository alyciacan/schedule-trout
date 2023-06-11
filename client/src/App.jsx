import './App.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import NavBar from './components/Navbar/Navbar'
import BookAppointment from './components/BookAppointment/BookAppointment'

const App = () => {

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/profile/:id' element={ <Profile /> } />
          <Route path='/book/:coach' element={ <BookAppointment /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
