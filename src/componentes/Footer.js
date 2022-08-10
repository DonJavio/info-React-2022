import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () =>{
    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to ='/' className='col-12 col-md3 d-flex align-items-center justify-content-center'>
                            <img src='./info-noticias-logo.png' className='mx-2' width='150'></img>
                        </Link>
                        <h6 className='d-flex align-items-center justify-content-center'>Fabricio Bruno Perelli Cinat Derechos Resevados 2022</h6>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer;