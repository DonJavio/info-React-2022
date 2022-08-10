import React from 'react';

const Header = () => {
    return(
        <nav className="navbar navbar-light">
            <a to ='/' className='col-12 col-md3 d-flex align-items-center'>
                <img src='./info-noticias-logo.png' className='mx-5' width='150'></img>
            </a>
        </nav>
    );
}

export default Header;