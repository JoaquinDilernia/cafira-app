import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Clientes.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'



const API_URL = 'http://localhost:1337/api'

async function getVendedores() {
  const res = await fetch(`${API_URL}/vendedors`)
  const { data } = await res.json()
  return data
}

async function getClientes() {
  const res = await fetch(`${API_URL}/clients?populate=*`)
  const { data } = await res.json()
  return data
}


const Clientes = () => {

  const params = useParams()

  const [Vendedores, setVendedores] = useState([])
  const [Clientes, setClientes] = useState([])
  useEffect(() => {
    getVendedores().then(Vendedores => setVendedores(Vendedores))
  }, [])

  useEffect(() => {
    getClientes().then(Clientes => setClientes(Clientes))
  }
    , [])


  return (
    //mostrar una tabla con los clientes del vendedor
 <>
    <NavBar id={params.id} /> 
    <div className='cliente'>

      <div className='botones'>
      <Link className='boton' to={`/home/${params.id}`}>Home</Link>
      <Link className='boton' to={`/home/${params.id}/clientes/nuevo`}>Nuevo Cliente</Link>

      </div>

      <h1>Clientes</h1> 

      <table className='tabla-cliente'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Empresa</th>
            <th>Cuil</th>
            <th>Tipo</th>
            <th>Vendedor</th>
          </tr>
        </thead>

        



        <tbody>
          {Clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.attributes.Nombre}</td>
              <td>{cliente.attributes.Apellido}</td>
              <td>{cliente.attributes.Empresa}</td>
              <td>{cliente.attributes.Cuil}</td>
              <td>{cliente.attributes.tipo}</td>
              <td>{cliente.attributes.vendedor.data.attributes.Nombre}</td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
    </>

  )
}

export default Clientes
