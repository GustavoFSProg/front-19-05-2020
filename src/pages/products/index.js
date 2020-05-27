import React, { useState, useEffect } from 'react'
import '../../style.css'
import { Table } from 'reactstrap'
import api from '../../services/api'
import Header from '../../Header'

export default function Products() {
  const [dados, setDados] = useState([])

  async function productsList() {
    try {
      const { data } = await api.get('/products')
      return setDados(data)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    productsList()
  }, [])

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-2" />

          <div className="col-md-8">
            <div align="center">
              <h1 className="titulo">Website Products</h1>
            </div>
            <br />
            <Table hover>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((dado) => {
                  return (
                    <tr key={dado._id}>
                      <td>{dado.title}</td>
                      <td>
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(dado.price)}
                      </td>
                      <td>{dado.description}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
