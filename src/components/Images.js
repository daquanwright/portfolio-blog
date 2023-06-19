import React from 'react';
import LinkedIn from '../images/linkedin-icon.png';
import GitHub from '../images/github-icon.png';

const Images = () => {

    return(

        <><a href='https://www.linkedin.com/in/daquan-wright-670aa63a' className='linkedInSocialIcon'>
            <img src={LinkedIn} alt='LinkedIn Social Link' height='80px' width='80px' />
        </a>

        <a href='https://github.com/daquanwright' className='gitHubSocialIcon'>
            <img src={GitHub} alt='GitHub Social Link' height='100px' width='100px' />
        </a></>
        
    )

}

export default Images;