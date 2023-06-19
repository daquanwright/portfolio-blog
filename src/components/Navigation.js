import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
    
const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    useEffect(() => {
        if (click) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'visible';
    }, [click]);

    return(

        <div className='navigation'>
            <ul className={click ? 'navMenu active' : 'navMenu'}>
                <li>
                    <Link to='/' onClick={handleClick}>Home</Link>
                </li>
                <li>
                    <Link to='/Blog' onClick={handleClick}>Blog</Link>
                </li>
                <li>
                    <Link to='/Portfolio' onClick={handleClick}>Portfolio</Link>
                </li>
                <li>
                    <Link to='/About' onClick={handleClick}>About</Link>
                </li>
                <li>
                    <Link to='/Contact' onClick={handleClick}>Contact</Link>
                </li>
            </ul>

            <div className='hamburger' onClick=
            {handleClick}>
                {click ? (
                <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                <FaBars size={20} style={{color: "#fff" }} />
                )}
                
            </div>

        </div>
    );
}
    
export default Navigation;