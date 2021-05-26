import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// #region pages
import Login from './pages/auth/Login'
import Users from './pages/user/Users'
import Todos from './pages/todo/Todos'
import Albums from './pages/album/Albums'
// #endregion pages

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/todos">
          <Todos></Todos>
        </Route>
        <Route path="/albums">
          <Albums></Albums>
        </Route>
      </Switch>
    </Router>
  )
}
