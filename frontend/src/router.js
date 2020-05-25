import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from '../src/Form'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  )
}
