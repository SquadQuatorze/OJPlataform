import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TrilhasStyle.css'
import { BsYoutube, BsTextParagraph, BsBook, BsLink45Deg, BsClipboardCheck } from "react-icons/bs";
import { GoMortarBoard } from "react-icons/go";
import { Link } from "react-router-dom";


export const QA = () => {

    return (
        <div className=""> 
            <h2 className="sub-title"> QA </h2>
            <p className="paragraph"> Aprenda a ser " o olho do cliente ", sendo responsável por analisar todos os aspectos de utilização de um software ou aplicação e verificar se tudo esta sendo entregue conforme as expectativas do cliente. </p>
            <div className="introducao-card  ">
                <h2 className='title-card '>
                    Conceitos básicos QA
                </h2>
                <div className=' responsive-card '>
                    <div className='d-flex justify-content-center modules-course text-center '>
                        <Link className="card-itens " to="/QA"> 
                        <BsYoutube className="img-icon" />
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
                            <BsBook className="img-icon" />
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
                    Conteúdo adicional QA
                </h2>
                <div className=' responsive-card'>
                    <div className='d-flex justify-content-center modules-course text-center '>
                        <Link className="card-itens " to="/"> 
                        <BsYoutube className="img-icon" />
                        <p className='link-itens'> Vídeos </p>
                        </Link>
                        <Link className="card-itens" to="/"> 
                        <BsTextParagraph className="img-icon" />
                        <p className='link-itens'> Artigos </p>
                        </Link>
                        <Link className="card-itens" to="/"> 
                        <GoMortarBoard className="img-icon" />
                        <p className='link-itens'> Cursos </p>  
                        </Link>                    
                    </div>
                    <div className='d-flex justify-content-center modules-course modules-course text-center'>
                        <Link className="card-itens" to="/">
                            <BsBook  className="img-icon"/>
                            <p className='link-itens'> Livros </p>                            
                        </Link>          
                        <Link className="card-itens" to="/">

                            <BsLink45Deg className="img-icon"/>
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

    )
}