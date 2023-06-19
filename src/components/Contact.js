import React from 'react';
import useFetch from './useFetch';
import Form from './Form';

const Contact = () => {

    const pageEndpoint = 'http://localhost/wordpress/wp-json/wp/v2/pages/44';

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

            <Form />
            
            </div>
            
        </div>

    )

}

export default Contact;