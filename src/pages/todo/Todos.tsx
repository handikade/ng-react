import React, { useEffect, useState } from 'react'
import TodoService, { Todo } from './../../services/TodoService'

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const todoService = new TodoService()

  useEffect(() => {
    todoService.getAllTodos().subscribe((response) => {
      console.log(response)

      setTodos(response)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const todoLists = todos.map((todo) => <li key={todo.id}>{todo.title}</li>)

  return <div>{todoLists}</div>
}
