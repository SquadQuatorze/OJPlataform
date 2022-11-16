import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBarStyle.css'
import { BsBoxArrowInLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import image74 from '../assets/Image74.png'
import EVOLUTION from '../assets/EVOLUTION.png'



export const NavBarLogin = () => {

    return (
            <nav className="navbar navbar-expand-lg nav-menu">
                           

                <div className="container-fluid">
                    <a className="navbar-brand img-1" href="#Home">
                        <div className='text-center pt-4 img-1'>
                            <img src={image74} alt="" />
                        </div>    
                        <div className='text-center img-2'> 
                            <img src={EVOLUTION} alt="" />
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-card " id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-itens ">
                            <Link className="active nav-item1" aria-current="page" to="/"> Home </Link>
                            <Link className="nav-item1" to="/trilhas">Nossas Trilhas</Link>
                            <Link className="nav-item1" to="/about">Sobre Nós </Link>
                        </div>
                        <div>
                            <Link to="/login" className='nav-item1 button-login' > <BsBoxArrowInLeft color="#9B9D9E" /> Entrar </Link>
                        </div>
                        
                    </div>
                </div>
            </nav>
    )
    
}