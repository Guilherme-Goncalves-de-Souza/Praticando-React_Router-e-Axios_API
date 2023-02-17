import { Link } from "react-router-dom"
import { useAxios } from "../hooks/useAxios"
import { UrlType } from "../types/UrlTypes"

const TodosAlbums = ({ url }: UrlType) => {
    const { dados: albums, loading, error } = useAxios(url)


    return (
        <div className="albums">

            {loading && !error &&
                <h2 className="loading">Carregando...</h2>
            }

            {!loading && 
                <>
                    <h1>Albums:</h1>
                    <ul className="listaAlbums">
                        {albums.map( (item: any) => (
                            <Link to={`/${item.id}`} key={item.id}>
                                <li>
                                    {item.title}
                                </li>    
                            </Link>
                        ))}
                    </ul> 
                </>
                
            }

            {error &&
                <h2 className="error">ERRO, tente mais tarde!</h2>
            }
            
        </div>
    )
}

export default TodosAlbums