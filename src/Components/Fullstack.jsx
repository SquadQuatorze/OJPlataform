import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TrilhasStyle.css'
import { BsYoutube, BsTextParagraph, BsBook, BsLink45Deg, BsClipboardCheck } from "react-icons/bs";
import { GoMortarBoard } from "react-icons/go";
import { Link } from "react-router-dom";


export const Fullstack = () => {

    return (
        <div> 
            <h2 className="sub-title"> Full-stack </h2>
            <p className="paragraph"> Aprenda a ser um profissional multitarefa que cobre várias frente na área de TI, podendo trabalhar com diferentes linguagens. </p>
            <div className="introducao-card  ">
                <h2 className='title-card '>
                    Conceitos básicos full-stack
                </h2>
                <div className=' responsive-card '>
                    <div className='d-flex justify-content-center modules-course text-center '>
                        <Link className="card-itens " to="/fullstack"> 
                        <BsYoutube  className="img-icon"/>
                        <p className='link-itens'> Vídeos </p>
                        </Link>
                        <Link className="card-itens" to="/"> 
                        <BsTextParagraph className="img-icon" />
                        <p className='link-itens'> Artigos </p>
                        </Link>
                        <Link className="card-itens" to="/"> 
                        <GoMortarBoard className="img-icon"/>
                        <p className='link-itens'> Cursos </p>  
                        </Link>                    
                    </div>
                    <div className='d-flex justify-content-center modules-course modules-course text-center'>
                        <Link className="card-itens" to="/">
                            <BsBook className="img-icon"/>
                            <p className='link-itens'> Livros </p>                            
                        </Link>          
                        <Link className="card-itens" to="/">

                            <BsLink45Deg className="img-icon" />
                            <p className='link-itens'> Links úteis</p>                        
                        </Link>
                        <Link className="card-itens" to="/">
                            <BsClipboardCheck className="img-icon"/>
                            <p className='link-itens'> Desafios </p>  
                        </Link>
                    </div>
                </div>
            </div>
            <div className="introducao-card  ">
                <h2 className='title-card '>
                    Conteúdo adicional full-stack
                </h2>
                <div className=' responsive-card '>
                    <div className='d-flex justify-content-center modules-course text-center '>
                        <a className="card-itens "> 
                        <BsYoutube  className="img-icon"/>
                        <p className='link-itens'> Vídeos </p>
                        </a>
                        <a className="card-itens"> 
                        <BsTextParagraph className="img-icon"/>
                        <p className='link-itens'> Artigos </p>
                        </a>
                        <a className="card-itens"> 
                        <GoMortarBoard className="img-icon"/>
                        <p className='link-itens'> Cursos </p>  
                        </a>                    
                    </div>
                    <div className='d-flex justify-content-center modules-course modules-course text-center'>
                        <a className="card-itens">
                            <BsBook className="img-icon"/>
                            <p className='link-itens'> Livros </p>                            
                        </a>          
                        <a className="card-itens">

                            <BsLink45Deg className="img-icon"/>
                            <p className='link-itens'> Links úteis</p>                        
                        </a>
                        <a className="card-itens">
                            <BsClipboardCheck className="img-icon"/>
                            <p className='link-itens'> Desafios </p>  
                        </a>

                  
                    </div>
                </div>
            </div>
        </div> 

    )
}