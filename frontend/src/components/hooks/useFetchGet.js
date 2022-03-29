import { useState, useEffect } from 'react';
export default function useFetchGet( url ) {
    const [data, setData] = useState([])
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setMessage(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return { data, isLoading, message }
}