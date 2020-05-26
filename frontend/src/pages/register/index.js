import React, { useState, useHistory } from 'react'
import '../../style.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import api from '../../services/api'
import Header from '../../Header'

export default function Register() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [slug, setSlug] = useState('')

  async function Formulario() {
    const data = { title, description, price, slug }
    try {
      await api.post('/products', data)

      alert('Deu certo product cadastrado')
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
            <br /> <br />
            <div align="center">
              <h1 className="titulo">Cadastro de Produtos</h1>{' '}
            </div>
            <br /> <br />
            <Form onSubmit={Formulario}>
              <FormGroup>
                <Label for="exampleEmail">Titulo: </Label>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="exampleEmail"
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
                  id="exampleEmail"
                  placeholder="Price"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Slug: </Label>
                <Input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  id="exampleEmail"
                  placeholder="Slug"
                />
              </FormGroup>{' '}
              <br />
              <FormGroup>
                <Input
                  type="submit"
                  className="btn-primary"
                  value="Cadastrar"
                />
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
