import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBarStyle.css'
import { BsBoxArrowInRight } from "react-icons/bs";



export const NavBarLogout = () => {

    return (
            <nav className="navbar navbar-expand-lg nav-menu">
            <div className="container-fluid">
                
                <a className="navbar-brand " href="#Home">
                        <div className='text-center pt-4 img-1'>
                            <img src={image74} alt="" />
                        </div>    
                        <div className='text-center'> 
                            <img src={EVOLUTION} alt="" />
                        </div>
                    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-card " id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-itens ">
                        <a className="active nav-item" aria-current="page" href="#">Home</a>
                        <a className="nav-item" href="#">Nossas Trilhas</a>
                        <a className="nav-item" href="#">Sobre Nós</a>
                    </div>
                    <div className="nav-itens">
                        <img src="" alt="" srcset="" />
                        <p>Núbia Júnior</p>
                    </div>
                    <div>
                        <a href="#" className='nav-item'><BsBoxArrowInRight color="#9B9D9E" /> Sair</a>
                    </div>
                    
                </div>
            </div>
            </nav>
    )
    
}