import React, { useEffect, useState } from 'react'
import AlbumService, { Album } from './../../services/AlbumService'

export default function Albums() {
  const [albums, setAlbums] = useState<Album[]>([])
  const albumService = new AlbumService()

  useEffect(() => {
    albumService.getAllAlbums().subscribe((response) => {
      console.log(response)

      setAlbums(response)
    })
  }, [])

  const albumLists = albums.map((album) => (
    <li key={album.id}>{album.title}</li>
  ))

  return <div>{albumLists}</div>
}
