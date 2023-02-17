import { UrlType } from "../types/UrlTypes"

import { useParams } from "react-router-dom"
import { useAxios } from "../hooks/useAxios"

import PhotosAlbum from "./PhotosAlbum"

const UmAlbum = ({ url }: UrlType) => {
    const { id } = useParams()

    const { dados: album, loading, error} = useAxios(`${url}/${id}`)

  return (
    <div className="album">
        {loading && !error &&
          <h2 className="loading">Carregando...</h2>
        }

        {!loading && 
          <>
              <h1>{album.title}</h1>
              <PhotosAlbum url={url} id={id}/>
          </>
                
        }

        {error &&
          <h2 className="error">ERRO, tente mais tarde!</h2>
        }
    </div>
  )
}

export default UmAlbum