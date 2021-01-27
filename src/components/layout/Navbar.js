import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ icon, title}) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>    
                        
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>            
        </nav>
    )
}

// default props if none are passed by the developer
Navbar.defaultProps= {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

// Define the correct data type for props e.g. string, number, array etc
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
