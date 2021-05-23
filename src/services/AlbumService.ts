import { Observable } from 'rxjs/internal/Observable'
import { Subscriber } from 'rxjs/internal/Subscriber'

export default class AlbumService {
    // constructor() {
    //     const token = localStorage.getItem('token')
    // }

    getAllAlbums(): Observable<Album[]> {
        const url: string = `https://jsonplaceholder.typicode.com/albums`

        return new Observable((observer: Subscriber<Album[]>) => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    observer.next(json)
                    observer.complete()
                })
        })
    }

    getAlbumById(id: number): Observable<Album> {
        const url: string = `https://jsonplaceholder.typicode.com/albums/${id}`

        return new Observable((observer: Subscriber<Album>) => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    observer.next(json)
                    observer.complete()
                })
        })
    }
}

export interface Album {
    id: number
    title: string
    userId: number
}