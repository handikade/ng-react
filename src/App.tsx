import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// #region route
import AuthRoute from './utils/route/AuthRoute'
import PrivateRoute from './utils/route/PrivateRoute'
// #endregion route

// #region pages
import Login from './pages/auth/Login'
import Users from './pages/user/Users'
// #endregion pages

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <AuthRoute path="/login" component={Login} />
        <PrivateRoute path="/users" component={Users} />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </Router>
  )
}
