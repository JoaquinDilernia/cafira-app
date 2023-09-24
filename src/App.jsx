import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Clientes from './components/Clientes/Clientes'




function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home/:id' element={<Home />} />
      <Route path='/clientes/:id' element={<Clientes />} />
      
    </Routes>

    

    </>
  )
}

export default App
