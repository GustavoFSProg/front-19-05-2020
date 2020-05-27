import React from 'react'
import '../../style.css'
import foto from '../../assets/pcs.png'
import Header from '../../Header'

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-3" />

          <div className="col-md-4">
            <div align="center">
              <h1 className="titulo">Website Products</h1>
            </div>
            <br />
            <img width="150%" height=" 100%" src={foto} alt="inicio" />
          </div>
        </div>
      </div>
    </div>
  )
}
