import React from 'react'
import { useState, useEffect } from 'react'
import './NavBar.css'
import { VscAccount } from "react-icons/vsc";
import logo from './bylett.png'
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:1337/api'

async function getVendedores() {
  const res = await fetch(`${API_URL}/vendedors`)
  const { data } = await res.json()
  return data
}

const NavBar = (props) => {


  const [Vendedores, setVendedores] = useState([])
  useEffect(() => {
    getVendedores().then(Vendedores => setVendedores(Vendedores))
  }, [])

  
  return (
    <>
      <div className='contenedor-nav'>
      <div className='contenedor-link'>
        <Link className='link' to={"/"}>cambiar de usuario</Link>
        </div>
        <div className='contenedor-nombre'>
      <i className='icono-navbar'><VscAccount /></i> 
             <p>{Vendedores.map(Vendedor => (
          <>
            {Vendedor.id == props.id ? `${Vendedor.attributes.Nombre} ${Vendedor.attributes.Apellido}` : null}
          </>
        ))}</p>
        </div>
        <div>
        <img src={logo} alt="logo" />
        </div>
    </div>
    </>
  )
}

export default NavBar
