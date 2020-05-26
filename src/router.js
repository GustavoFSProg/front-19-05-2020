import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './pages/register'
import Home from './pages/home'
import Products from './pages/products'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/products" component={Products} />
    </Switch>
  )
}
