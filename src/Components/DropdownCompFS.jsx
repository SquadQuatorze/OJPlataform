import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './DropdownStyles.css'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export const DropdownCompFS = () => {

    return (
        
        <div>
            <div className="d-flex" > 
                <img src="" alt="" className='img-parceiro' />
                <p className="text-class">UXNOW / Daniel Furtado</p>
            </div>
            <div className=' '> 
                <div className="accordion accordion-flush" id="accordionFlushExample"> {/* accordion-one */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Conceitos Básicos de Programação
                        </button>
                    </h2>

                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=9k_lIYuRtg8" className='text-decoration-none link-main'>Versionamento com Git - com Matheus Ferreira | Orange Talks #06 🍊</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV" className='text-decoration-none link-main'>Curso de Lógica de Programação </a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=bZQx1oHMbHg" className='text-decoration-none link-main'>Dúvidas sobre carreira</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=Mmukepu3yRs" className='text-decoration-none link-main'>📢 Orange Juice Cast #02 - Habilidades além do código! | Com Mateus Oliveira</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=zTMvQD5EtJw" className='text-decoration-none link-main'>📢 Orange Juice Cast #04 - Qual a melhor linguagem de programação? | Com Willian da Silva</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=qZ4ZKJSmf4k" className='text-decoration-none link-main'>📢 Orange Juice Cast #54 - O que um Dev júnior pode ensinar?</a>  </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center card-btn-dropdown">
                    <button className="btn-dropdown"><Link className="nav-item text-decoration-none" to="/trilhas"> <span className="text-btn-dropdown">Conhecer materiais complementares. </span>   </Link> <BsArrowRight /> </button> 
                </div>

                
                 </div>
            </div> 
        </div>            

    )
}