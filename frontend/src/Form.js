import React, { useState } from 'react'
import './style.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default function Formulary(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Titulo: </Label>
        <Input
          type="text"
          name="titulo"
          id="exampleEmail"
          placeholder="Titulo"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Description: </Label>
        <Input
          type="text"
          name="desc"
          id="exampleEmail"
          placeholder="Description"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Price: </Label>
        <Input type="text" name="price" id="exampleEmail" placeholder="Price" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Slug: </Label>
        <Input type="text" name="price" id="exampleEmail" placeholder="Slug" />
      </FormGroup>{' '}
      <br />
      <FormGroup>
        <Input type="submit" className="btn-primary" value="Cadastrar" />
      </FormGroup>
    </Form>
  )
}
