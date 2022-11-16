import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TrilhasStyle.css'
import { BsYoutube, BsTextParagraph, BsBook, BsLink45Deg, BsClipboardCheck } from "react-icons/bs";
import { GoMortarBoard } from "react-icons/go";
import { Link } from "react-router-dom";


export const Ux = () => {

    return (
        <div> 
            <h2 className="sub-title"> UX/UI Design</h2>
            <p className="paragraph"> Aprenda a melhorar a experiência de produtos digitais por meio de pesquisa de usuário, prototipagem e outros processos que irão garantir o máximo de usuabilidade, utilidade e acessibilidade.. </p>
            <div className="introducao-card  ">
                <h2 className='title-card '>
                    Fundamentos de UX (User Experience)
                </h2>
                <div className=' responsive-card '>
                    <div className='d-flex justify-content-center modules-course text-center '>
                        <Link className="card-itens " to="/ux-fundamentos" > 
                        <BsYoutube className="img-icon" />
                        <p className='link-itens'> Vídeos </p>
                        </Link>
                        <Link className="card-itens" to="/"> 
                        <BsTextParagraph className="img-icon" />
                        <p className='link-itens'> Artigos </p>
                        </Link>
                        <Link className="card-itens" to=""> 
                        <GoMortarBoard className="img-icon"/>
                        <p className='link-itens'> Cursos </p>  
                        </Link>                    
                    </div>
                    <div className='d-flex justify-content-center modules-course modules-course text-center'>
                        <Link className="card-itens">
                            <BsBook className="img-icon"/>
                            <p className='link-itens'> Livros </p>                            
                        </Link>          
                        <Link className="card-itens">

                            <BsLink45Deg className="img-icon"/>
                            <p className='link-itens'> Links úteis</p>                        
                        </Link>
                        <Link className="card-itens">
                            <BsClipboardCheck className="img-icon"/>
                            <p className='link-itens'> Desafios </p>  
                        </Link>
                    </div>
                </div>
            </div>
            <div className="introducao-card  ">
                <h2 className='title-card '>
                    Fundamentos de UI (User Interface)
                </h2>
                <div className=' responsive-card '>
                    <div className='d-flex justify-content-center modules-course text-center '>
                        <Link className="card-itens" to="/ui-fundamentos"> 
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
                    Conteúdo adicional UX/UI
                </h2>
                <div className=' responsive-card '>
                    <div className='d-flex justify-content-center modules-course text-center '>
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

                            <BsLink45Deg className="img-icon"/>
                            <p className='link-itens'> Links úteis</p>                        
                        </Link>
                        <Link className="card-itens" to="/">
                            <BsClipboardCheck className="img-icon"/>
                            <p className='link-itens'> Desafios </p>  
                        </Link>
                    </div>
                </div>
            </div>
        </div> 

    )
}