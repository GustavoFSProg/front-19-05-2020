import React from 'react'
import Header from './Header'
import Formulary from './Form'
import './style.css'

function App() {
  return (
    <div>
      {' '}
      <Header />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-6">
            <h1 className="titulo">Cadastrar Produtos</h1>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-5">
            <Formulary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
