import React from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'a6158078c5msh712cd10fd1b85b4p1c7b87jsnad7c877620d8',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
        } catch(error) {
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default useFetch