import './styles.scss'

import { Link } from 'react-router-dom'

export function NavBar () {
    const linkStyle = {
        textDecoration:'none',
        color:'purple'
    
    }
    
    return (
        <nav>
            <div className="container-nav">
                <div className="logo"></div>
                <div className="navmenu">
                    <ul>
                        <li>
                            <Link to='/' style={linkStyle}>Home</Link>
                        </li>
                        <li>
                            <Link to='/register' style={linkStyle} >Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}