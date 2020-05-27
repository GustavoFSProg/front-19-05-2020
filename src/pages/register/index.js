/* eslint-disable no-alert */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import '../../style.css'
import api from '../../services/api'
import Header from '../../Header'

export default function Register() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [slug, setSlug] = useState('')
  const { push } = useHistory()

  async function formulario(e) {
    e.preventDefault()
    const data = { title, description, price, slug }
    try {
      await api.post('/products', data)

      alert('Deu certo product cadastrado')
      push('/')
    } catch (error) {
      alert('ERRO product não cadastrado')
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3"> </div>
          <div className="col-md-6">
            <br />
            <br />
            <div align="center">
              <h1 className="titulo">Cadastro de Produtos</h1>
            </div>
            <br />
            <br />
            <Form onSubmit={formulario}>
              <FormGroup>
                <Label for="exampleEmail">Titulo: </Label>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Titulo"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Description: </Label>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Price: </Label>
                <Input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Slug: </Label>
                <Input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Slug"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Button className="btn-primary">Cadastrar</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
