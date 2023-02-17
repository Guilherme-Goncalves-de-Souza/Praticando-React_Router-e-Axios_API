import { useAxios } from "../hooks/useAxios"
import { UrlType } from "../types/UrlTypes"

import { Link } from "react-router-dom"


const PhotosAlbum = ({url, id}: UrlType) => {
    const { dados: photosAlbum, loading, error} = useAxios(`${url}/${id}/photos`)

  return (
    <>

            {loading && !error &&
                <h2 className="loading">Carregando photos deste álbum</h2>
            }

            {!loading && 
                <>
                <h2>Photos: </h2>
                    <div className="photos">
                        <ul>
                            {photosAlbum.map( (item: any) => (
                                <li key={item.id}>
                                    <Link to={`/photos/${item.id}`}> 
                                        <img src={item.thumbnailUrl} 
                                        alt={`photo id:${item.id}`} 
                                        title={item.title}
                                        />
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                    
                </>
                
            }

            {error &&
                <h2 className="error">ERRO, tente mais tarde!</h2>
            }
    </>
  )
}

export default PhotosAlbum