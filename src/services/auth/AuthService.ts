import { Observable, Subscriber } from 'rxjs'

const EMAIL = 'admin@test.com'
const PASSWORD = '12345678'

export default class AuthService {
  login(payload: LoginPayload): Observable<any> {
    return new Observable((subscriber: Subscriber<any>) => {
      setTimeout(() => {
        if (payload.email !== EMAIL || payload.password !== PASSWORD) subscriber.error('Wrong password or email')

        subscriber.next({
          response: 200,
          token: 'abcdef123456',
          message: 'Login suceeded!'
        })

        subscriber.complete()
      }, 2000)

    })
  }
}

export interface LoginPayload {
  email: string
  password: string
}
