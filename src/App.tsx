import React from 'react'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Container from '@material-ui/core/Container'

import { AccountBox, Album, EventNote } from '@material-ui/icons'

// #region pages
import Users from './pages/user/Users'
import Todos from './pages/todo/Todos'
import Albums from './pages/album/Albums'
// #endregion pages

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
})

export default function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
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
      </Container>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/users"
          label="Users"
          value="users"
          icon={<AccountBox />}
        />
        <BottomNavigationAction
          component={Link}
          to="/todos"
          label="Todos"
          value="todos"
          icon={<EventNote />}
        />
        <BottomNavigationAction
          component={Link}
          to="/albums"
          label="Albums"
          value="albums"
          icon={<Album />}
        />
      </BottomNavigation>
    </Router>
  )
}
