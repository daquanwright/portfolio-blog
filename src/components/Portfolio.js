import React from 'react';
import useFetch from './useFetch';

const Portfolio = () => {

    const pageEndpoint = 'http://localhost/wordpress/wp-json/wp/v2/pages/46';

    const {
        pageState,
        pageLoading, 
        pageError, 
    } = useFetch(pageEndpoint);

    return (
        
        <div className='container'>

            <div className='page'>

            {pageLoading && <h3>Loading...</h3>}
            {pageError && <p>{pageError}</p>}
            {
                pageState.content && pageState.title && (
                    <>
                        <h1>{pageState.title.rendered}</h1>
                        <p dangerouslySetInnerHTML={{ __html: pageState.content.rendered }}></p>
                    </>
                )
            }

            </div>
            
        </div>

    )

}

export default Portfolio;