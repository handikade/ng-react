import React from 'react'
import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core'
import AppBottomNavigation from './../../parts/bottom-navigation/AppBottomNavigation'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function AppDashboard(props: {
  children:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined
}) {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        {props.children}
        <AppBottomNavigation></AppBottomNavigation>
      </Container>
    </>
  )
}
