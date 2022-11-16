import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginStyles.css'
import {NavBarLogin} from "../Components/NavBarLogin"

import { Footer } from '../Components/Footer';
import image74 from '../assets/Image74.png'
import EVOLUTION from '../assets/EVOLUTION.png'

import { Link } from "react-router-dom";



export const LoginPage = () =>  {
 

    return (
        <div>
            <NavBarLogin />
            <div className='text-center pt-4'>
                <img src={image74} alt="" />
            </div>    
            <div className='text-center'> 
                <img src={EVOLUTION} alt="" />
            </div>
           
            <div className="d-flex justify-content-center">


                    <div className="card-login-desktop text-center ">
           
                        <div className="d-flex flex-column justify-content-center">
                            <h1 className="text-center">Seja bem-vindo ao Orange Evolution!</h1>
                            <div className="d-flex justify-content-center">
                                <div className="d-flex flex-column"> 
                                    <div className="d-flex flex-column  "> 
                                        <input type="email" placeholder="E-mail" name="" id="" className="btn-login mt-4 border-light"/>
                                        <input type="password" placeholder="Senha" name="" id="" className="btn-login  border-light"/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        
                                        <Link className="nav-item text-decoration-none text-secondary" to="/trilhas"><button type="submit" className="btn btn-color btn-login d-flex justify-content-center" >Entrar </button></Link>
                                        <button className="btn-forgetpass  btn-login d-flex justify-content-center"><Link className="nav-item" to="/">Esqueci minha senha</Link></button>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                    <p>Não é membro? <a className="btn-forgetpass btn-account ">Crie uma conta</a> </p>
                            </div>
                        </div>

                    </div>
                </div> 
                <Footer />           
        </div>
 
    )
}
    


