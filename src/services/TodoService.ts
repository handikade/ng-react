import { Observable } from 'rxjs/internal/Observable'
import { Subscriber } from 'rxjs/internal/Subscriber'

export default class TodoService {
    constructor() {
        const token = localStorage.getItem('token')
        console.log(token)
    }

    getAllTodos(): Observable<Todo[]> {
        const url: string = `https://jsonplaceholder.typicode.com/todos`

        return new Observable((observer: Subscriber<Todo[]>) => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    observer.next(json)
                    observer.complete()
                })
        })
    }

    getTodoById(id: number): Observable<Todo> {
        const url: string = `https://jsonplaceholder.typicode.com/todos/${id}`

        return new Observable((observer: Subscriber<Todo>) => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    observer.next(json)
                    observer.complete()
                })
        })
    }
}

export interface Todo {
    completed: boolean
    id: number
    title: string
    userId: number
}