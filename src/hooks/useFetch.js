import {useState, useEffect} from 'react';

function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(
                data => {
                    setData(data)
                }
            )
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [url])
    return { loading, data }
}

export default useFetch;

