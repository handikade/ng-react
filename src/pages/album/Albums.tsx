import React, { useEffect, useState } from 'react'
import AppDashboard from '../../parts/dashboard/AppDashboard'
import AlbumService, { Album } from '../../services/AlbumService'

export default function Albums() {
  const [albums, setAlbums] = useState<Album[]>([])
  const albumService = new AlbumService()

  useEffect(() => {
    albumService.getAllAlbums().subscribe((response) => {
      setAlbums(response)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const albumLists = albums.map((album) => (
    <li key={album.id}>{album.title}</li>
  ))

  return <AppDashboard>{albumLists}</AppDashboard>
}
