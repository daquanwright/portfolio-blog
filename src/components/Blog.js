import React from 'react';
import useFetch from './useFetch';

const Blog = () => {

    const pageEndpoint = 'http://localhost/wordpress/wp-json/wp/v2/pages/8';
    const postsEndpoint = 'http://localhost/wordpress/wp-json/wp/v2/posts';

    const {
        pageState,
        pageLoading, 
        pageError, 
        postsState, 
        postsError, 
    } = useFetch(pageEndpoint, postsEndpoint);

    return (

        <div className='container'>

            <div className='postsWrapper'>
            
                {pageLoading && <h3>Loading...</h3>}
                {pageError && <p>{pageError}</p>}
                {postsError && <p>{postsError}</p>}
                {
                    // Display blog title from endpoint
                    pageState.title && (
                        <>
                            <h1>{pageState.title.rendered}</h1>
                        </>
                    )
                }
                <ul>
                    {/* Display posts content from endpoint 2 */}
                    {postsState && postsState.length > 0 && postsState.map((state) => {
                        return (

                        <li key={state.id}>
                            <h1>{state.title.rendered}</h1>
                            <h3>{state.date} - By Daquan Wright</h3>
                            <p className='post' dangerouslySetInnerHTML={{__html: state.excerpt.rendered}}></p>
                        </li>

                        )
                    })}
                </ul>
            </div>

        </div>
    )

}

export default Blog;