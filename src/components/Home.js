import React from 'react';
import useFetch from './useFetch';
import Images from '../components/Images';

const Home = () => {   

    const pageEndpoint = 'http://localhost/wordpress/wp-json/wp/v2/pages/5';

    const {
        pageState,
        pageLoading, 
        pageError, 
    } = useFetch(pageEndpoint);

    return (

        <>
        <div className='container'>

            {pageLoading && <h3>Loading...</h3>}
            {pageError && <p>{pageError}</p>}

            <div className='profilePicture'></div>
            
            <section>
                {
                    pageState.content && pageState.title && (
                        <>
                            <p className='frontpage' dangerouslySetInnerHTML={{ __html: pageState.content.rendered }}></p>
                        </>
                    )
                }
            </section>

            <div className='socialIconsPosition'><Images /></div>

        </div></>
        
    )
    
}

export default Home;