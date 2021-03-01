import { Observable } from 'rxjs/internal/Observable'
import { Subscriber } from 'rxjs/internal/Subscriber'

export default class UserService {
  constructor() {
    const token = localStorage.getItem('token')
    console.log(token)
  }

  getAllUsers(): Observable<User[]> {
    const url: string = `https://jsonplaceholder.typicode.com/users`

    return new Observable((observer: Subscriber<User[]>) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          observer.next(json)
          observer.complete()
        })
    })
  }

  getUserById(id: number): Observable<User> {
    const url: string = `https://jsonplaceholder.typicode.com/users/${id}`

    return new Observable((observer: Subscriber<User>) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          observer.next(json)
          observer.complete()
        })
    })
  }
}

export interface User {
  address: UserAddress
  company: UserCompany
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export interface UserCompany {
  bs: string
  catchPhrase: string
  name: string
}

export interface UserAddress {
  city: string
  geo: { lat: string; lng: string }
  street: string
  suite: string
  zipcode: string
}
