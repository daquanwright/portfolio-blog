import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/Portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>

                <p>Copyright &copy; 2022-2023 DaquanWright.com. All Rights Reserved.</p>
            </footer>
        )
    }
}

export default Footer;