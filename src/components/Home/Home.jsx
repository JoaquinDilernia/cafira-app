import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


const API_URL = 'http://localhost:1337/api'

async function getVendedores() {
  const res = await fetch(`${API_URL}/vendedors`)
  const { data } = await res.json()
  return data
}

const Home = () => {
  const params = useParams()

  const [Vendedores, setVendedores] = useState([])
  useEffect(() => {
    getVendedores().then(Vendedores => setVendedores(Vendedores))
  }, [])




  return (
    <>
      <NavBar id={params.id} />
      <div className='contenedor-home'>
        <div className='contenedor-link'>
          <Link className='link-home' to={`/clientes/${params.id}`}>Clientes</Link>
          <Link className='link-home' to={`/home/${params.id}/pedidos`}>Pedidos</Link>
          <Link className='link-home' to={`/home/${params.id}/productos`}>Productos</Link>
          </div>
      </div>
      <Footer />
    </>

  )
}

export default Home
