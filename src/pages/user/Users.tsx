import React, { useEffect, useState } from 'react'
import UserService, { User } from './../../services/UserService'

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  const userService = new UserService()

  useEffect(() => {
    userService.getAllUsers().subscribe((response) => {
      console.log(response)

      setUsers(response)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const userLists = users.map((user) => <li key={user.id}>{user.name}</li>)

  return <div>{userLists}</div>
}
