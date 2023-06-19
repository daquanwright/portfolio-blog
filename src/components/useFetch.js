import { useState, useEffect } from 'react';

function useFetch(endpoint, endpoint2) {

    const [pageState, setPageState] = useState([]);
    const [pageError, setPageError] = useState(null);
    const [pageLoading, setPageLoading] = useState(false);

    const [postsState, setPostsState] = useState([]);
    const [postsError, setPostsError] = useState(null);
    const [postsLoading, setPostsLoading] = useState(false);

    useEffect(() => {

        const abortController = new AbortController();

        const getState = async (endpoint) => {
            setPageState([]);
            setPageLoading(true);

            try {
                const response = await fetch(endpoint, {
                    signal: abortController.signal
                });

                if (!response.ok) {
                    throw new Error(`Error Status: ${response.status}`);
                }
                
                const responseData = await response.json();

                console.log(responseData)

                setPageState(responseData);

            } catch (error) {
                if(abortController.signal.aborted) {
                    return;
                }

                setPageError('Oops something went wrong!');
            } finally {
                setPageLoading(false);
            }
        };
        
        getState(endpoint);

        return () => {
            abortController.abort();
        };
    }, [endpoint]);

    useEffect(() => {

        const abortController = new AbortController();

        const getState = async (endpoint2) => {
            setPostsState([]);
            setPostsLoading(true);

            try {
                const response = await fetch(endpoint2, {
                    signal: abortController.signal
                });

                if (!response.ok) {
                    throw new Error(`Error Status: ${response.status}`);
                }
                
                const responseData = await response.json();

                console.log(responseData)

                setPostsState(responseData);

            } catch (postsError) {
                if(abortController.signal.aborted) {
                    return;
                }

                setPostsError('Oops something went wrong!');
            } finally {
                setPostsLoading(false);
            }
        };
        
        getState(endpoint2);

        return () => {
            abortController.abort();
        };
    }, [endpoint2]);

    return {
        pageState,
        pageLoading,
        pageError, 
        postsState,
        postsLoading,
        postsError,  
    }
}

export default useFetch;