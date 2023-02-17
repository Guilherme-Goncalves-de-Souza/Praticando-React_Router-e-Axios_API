import { useEffect, useState } from "react"
import axios from 'axios'

export const useAxios = (url: string) => {
    const [dados, setDados] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect( () => {
        const axiosData = async() => {
            try{
                setLoading(true)
                const res = await axios.get(url)
                setDados(res.data)
                setLoading(false)
            } catch (error){
                setError(true)
            }
            
        }

        axiosData()
    }, [])

    return { dados, loading, error }
}