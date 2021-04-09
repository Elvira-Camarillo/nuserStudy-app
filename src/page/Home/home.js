// Importar modulos
import React, { Component } from 'react'

// Importar componentes
import Navbar from '../../components/Navbar/navBar'

// Import CSS
import './Home.css'

export default class Home extends Component {
  render(){
    return(
      <div className="container">
        <Navbar/>
        <h1>Hola soy el Home</h1>
        <h2>soy un subtitulo</h2>
      </div>
    )
  }
}