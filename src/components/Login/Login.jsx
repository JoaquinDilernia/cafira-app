import React from 'react'
import { useState, useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import logo from './bylett.png'

const API_URL = 'http://localhost:1337/api'

async function getVendedores() {
  const res = await fetch(`${API_URL}/vendedors`)
  const { data } = await res.json()
  return data
}

const Login = () => {

  const [Vendedores, setVendedores] = useState([])
  useEffect(() => {
    getVendedores().then(Vendedores => setVendedores(Vendedores))
  }, [])

// funcion para obtener el valor del select cuando se cambia de opcion y guardarlo en el estado vendedor y pasarlo como parametro a la ruta home
  const [vendedor, setVendedor] = useState('')
  const handleChange = (e) => {
    setVendedor(e.target.value)
    console.log(vendedor)
  }



  return (
    <>
      <div className='contenedor-vendedor'>
        <div className='formulario-login'>
        <img src={logo} alt='logo' className='logo'/>
        <h1>LOGIN</h1>
        <select className='select' onChange={handleChange}>
          <option value=''>Seleccione un vendedor</option>
          {Vendedores.map(Vendedor => (
            <option key={Vendedor.id} value={Vendedor.id}>{Vendedor.attributes.Nombre} {Vendedor.attributes.Apellido}</option>
          ))}
        </select>
        {vendedor ? <Link to={`/home/${vendedor}`}><button className='boton-vendedor'>Ingresar</button></Link> : null}
        </div>
      </div>
    </>
  )
}

export default Login
