import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './pages/register'
import Home from './pages/home'
import Products from './pages/products'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/products" component={Products}></Route>
      </Switch>
    </BrowserRouter>
  )
}