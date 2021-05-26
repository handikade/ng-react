import React from 'react'
import { Container } from '@material-ui/core'
import AppBottomNavigation from './../../parts/bottom-navigation/AppBottomNavigation'

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
  return (
    <Container maxWidth="sm">
      {props.children}
      <AppBottomNavigation></AppBottomNavigation>
    </Container>
  )
}
