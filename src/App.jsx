
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'

function App() {
  
  return (
    <Routes>

     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>

    </Routes>
  )
}

export default App
