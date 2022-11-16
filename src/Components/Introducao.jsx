import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TrilhasStyle.css'
import { BsYoutube, BsTextParagraph, BsBook, BsLink45Deg, BsClipboardCheck } from "react-icons/bs";
import { GoMortarBoard } from "react-icons/go";
import { Link } from "react-router-dom";



export const Introdução = () => {

    return (
        <div> 
            <h1 className="title"> Nossas Trilhas</h1>
            <div className=''>
                <h2 className="sub-title  "> Comece por aqui </h2>
                    <p className="paragraph "> É iniciante na área tech? Veja nosso conteúdo introdutório multidisciplinar e decida com qual área você mais se identifica.</p>
                    <div className="introducao-card   ">
                        <h2 className='title-card '>
                            Conteúdo introdutório multidisciplinar
                        </h2>
                        <div className=' responsive-card '>
                            <div className='d-flex justify-content-center modules-course text-center '>
                                <Link className="card-itens " to="/introducao"> 
                                    <BsYoutube  className="img-icon"/>
                                    <p className='link-itens'> Vídeos </p>
                                </Link>
                                <Link className="card-itens" to="/"> 
                                <BsTextParagraph className="img-icon" />
                                <p className='link-itens'> Artigos </p>
                                </Link>
                                <Link className="card-itens"> 
                                <GoMortarBoard className="img-icon" to="/" />
                                <p className='link-itens'> Cursos </p>  
                                </Link>                    
                            </div>
                            <div className='d-flex justify-content-center modules-course modules-course text-center'>
                                <Link className="card-itens" to="">
                                    <BsBook className="img-icon" />
                                    <p className='link-itens'> Livros </p>                            
                                </Link>          
                                <Link className="card-itens" to="">

                                    <BsLink45Deg className="img-icon" />
                                    <p className='link-itens'> Links úteis</p>                        
                                </Link>
                                <Link className="card-itens" to="/">
                                    <BsClipboardCheck className="img-icon" />
                                    <p className='link-itens'> Desafios </p>  
                                </Link>
                            </div>
                    </div>
                </div>                
            </div>
 
        </div> 

    )
}