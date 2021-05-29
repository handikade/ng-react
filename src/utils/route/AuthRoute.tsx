import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

const AuthRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const token: string = localStorage.getItem('token') || ''
  const isLoggedIn: boolean = !!token

  if (!Component) return null

  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }}
    ></Route>
  )
}

export default AuthRoute
