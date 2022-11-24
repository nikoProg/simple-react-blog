import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false);//important, while the data is here, we want this to hide!
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                    //console.log(err.message);
                }
            });
        }, 2000); // this number and setTimeout is artificial lag, to show the LOADING part
        //console.log('use effect ran');
        //console.log(blogs);
        return () => {
            abortCont.abort();
            console.log('cleanup');
        }
    }, []) 

    return {data, isPending, error}
}

export default useFetch;