import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './DropdownStyles.css'
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";


export const DropdownCompUI = () => {

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
                            Fundamentos de UI (User Interface)
                        </button>
                    </h2>

                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=bHDDbIsKVnI" className='text-decoration-none link-main'>UI Design - [LIVE] UX Rainbow: Interface </a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=YvyrrmHYqbI" className='text-decoration-none link-main'>Design - Guia de Sobrevivência de Design - com Guilherme Silva | Orange Talks #38 🍊 </a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=INPlcg_BsGc" className='text-decoration-none link-main'>Protótipo - O que é um Wireframe? //UXNOW</a>  </div>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Interface
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=BD4CnI2Zc1s" className='text-decoration-none link-main'>O que é uma Interface? //UXNOW.</a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=mgOYINElFqI" className='text-decoration-none link-main'>Como fazer uma Interface mais fácil // UXNOW </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=mgOYINElFqI" className='text-decoration-none link-main'>Como fazer uma Interface mais fácil // UXNOW </a> </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center card-btn-dropdown">
                    <button className="btn-dropdown"><Link className="nav-item text-decoration-none" to="/trilhas"> <span className="text-btn-dropdown ">Conhecer materiais complementares. </span>   </Link> <BsArrowRight /> </button> 
                </div>

                
                 </div>
            </div> 
        </div>            

    )
}