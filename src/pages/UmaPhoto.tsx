import { useParams, useNavigate } from "react-router-dom"
import { useAxios } from "../hooks/useAxios"

const photo_url = 'https://jsonplaceholder.typicode.com/photos'


const UmaPhoto = () => {
    const { id } = useParams()

    const navegar = useNavigate()

    const { dados: photo, loading, error} = useAxios(`${photo_url}/${id}`)

    return (
        <div className="photoSolo">
            {loading && !error &&
                <h2 className="loading">Carregando...</h2>
            }

            {!loading && 
            <>
                <h1>{photo.title}</h1>
                <img src={photo.url} alt={`photo id: ${id}`} 
                title={photo.title}
                />
                <button onClick={() => navegar(-1)} 
                className='voltar'> Voltar </button>
            </>
                
            }

            {error &&
                <h2 className="error">ERRO, tente mais tarde!</h2>
            }
        </div>

        
    )
}

export default UmaPhoto