import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginStyles.css'
import {NavBarLogin} from "../Components/NavBarLogin"
import { Footer } from '../Components/Footer'



export const CreateAccountPage = () => {

    return (
         <div>
             <div>
            <NavBarLogin />
                <div className="d-flex justify-content-center  pt-4">
                    <div className="card-login-desktop text-center ">
                        <img variant="top" src="" className="position-relative"/> 
                        <div className="d-flex flex-column justify-content-center">
                            <h1 className="tittle-ca text-center">Criar uma conta</h1>
                            <div className="">
                                <div className=""> 
                                    <div className="  "> 
                                            <form action="create-account" method="post">
                                                <div >
                                                    <label for="nome"></label>
                                                    <input type="name" placeholder="Nome" className="forms-item "></input>                                                    
                                                </div>
                                                <div>
                                                    <label for="email"></label>
                                                    <input type="email" placeholder="E-mail" className="forms-item"></input>                                                    
                                                </div>  
                                                <div>
                                                    <label for="password"></label>
                                                    <input type="password" placeholder="Senha" className="forms-item"></input>                                                    
                                                </div>   
                                                <div>
                                                    <label for="re-password"></label>
                                                    <input type="password" placeholder="Confirmar senha" className="forms-item"></input>                                                    
                                                </div>                                                    
                                            </form>
                                    </div>
                                    <div className="mt-4 d-flex flex-column">
                                        <button type="submit" className="btn btn-login  d-flex justify-content-center" >Criar Conta</button>
                                        
                                    </div>


                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                    <p>Já é membro? <a className="btn-forgetpass btn-account ">Fazer Login</a> </p>
                            </div>
                        </div>

                    </div>
                </div>  
                <Footer />          
            </div>
         </div>
    )
 }
 