import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { AccountBox, Album, EventNote } from '@material-ui/icons'

export default function AppBottomNavigation() {
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 w-screen">
      <BottomNavigation value={value} onChange={handleChange}>
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
    </div>
  )
}
