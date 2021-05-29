import React, { useEffect, useState } from 'react'
import AppDashboard from '../../parts/dashboard/AppDashboard'
import UserService, { User } from '../../services/UserService'
import UserCard from '../../components/user/UserCard'

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

  const userLists = users.map((user) => (
    <UserCard
      key={user.id}
      name={user.name}
      email={user.email}
      phone={user.phone}
    ></UserCard>
  ))

  return <AppDashboard>{userLists}</AppDashboard>
}
