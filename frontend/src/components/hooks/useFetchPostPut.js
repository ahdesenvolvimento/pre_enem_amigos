import { useState, useEffect, useCallback } from 'react';
export default function useFetchPostPut() {
    const [data, setData] = useState([])
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const chamadaHook = (url, content) => {
        fetch(url, content)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                setMessage(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
        return { data, message, isLoading, setData };
    }
    return { chamadaHook }
}