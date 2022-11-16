import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './DropdownStyles.css'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export const DropdownComp = () => {

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
                            UX Design
                        </button>
                    </h2>

                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><a href="" className='text-decoration-none link-main'>O que é UX | User Experience? // UXNOW</a>  </div>
                            <div className="accordion-body"><a href="" className='text-decoration-none link-main'>Como fazer UX // UXNOW</a>  </div>
                            <div className="accordion-body"><a href="" className='text-decoration-none link-main'>Jornada de um UX Designer - com Tereza Alux | Orange Talks #33</a>  </div>
                            <div className="accordion-body"><a href="" className='text-decoration-none link-main'>|Live| FCInvite: Daniel Furtado do UXNOW</a>  </div>
                            <div className="accordion-body"><a href="" className='text-decoration-none link-main'>Orange Juice Cast #15 - UX: a experiência além do design - com Carla, Lucas e Grazielen</a>  </div>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        UX Research
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=v6ojU0Wa50Q" className='text-decoration-none link-main'>[LIVE] UX Rainbow: Research.</a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=KnFJAhiClnE" className='text-decoration-none link-main'>Como conhecer seu Usuário </a> </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Design thinking
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=3s9pWGsU02k" className='text-decoration-none link-main'> [LIVE] Design Thinking </a> </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Persona
                    </button>
                    </h2>
                    <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=kdUk7DZS6aQ" className='text-decoration-none link-main'> O que é uma Persona? //UXNOW </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=q_NrzJBS7QI" className='text-decoration-none link-main'> Como criar Personas? // UXNOW </a> </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Jornada do Usuario
                    </button>
                    </h2>
                    <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=EiroPM-lL-U" className='text-decoration-none link-main'> Como mapear a Jornada do Usuário </a> </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Arquitetura da Informação 
                    </button>
                    </h2>
                    <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=jAN1330de-s" className='text-decoration-none link-main'> O que é Escopo? //UXNOW </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=vmvSMYaV4oE" className='text-decoration-none link-main'> O que é Arquitetura de Informação? //UXNOW </a> </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Teste de usuabilidade 
                    </button>
                    </h2>
                    <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=VMXF3EDXZT8" className='text-decoration-none link-main'> [LIVE] UX Rainbow: Teste  </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=9Bzd_PfKYLk" className='text-decoration-none link-main'> Validando soluções com testes de usabilidade - com M. Letícia e Renata Cristina | Orange Talks #37  </a> </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Acessibilidade 
                    </button>
                    </h2>
                    <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=UqF6NZP0d8w" className='text-decoration-none link-main'> [LIVE] Acessibilidade: depende de nós!   </a> </div>
                    </div>
                </div>
                </div>
                    
                </div>
                <div className="d-flex justify-content-center card-btn-dropdown">
                    <Link to="/ui-fundamentos" className="nav-item text-decoration-none" >
                        <button className="btn-dropdown "> <span className="text-btn-dropdown"> Fundamentos de UI |User Interface|. </span> <BsArrowRight /> </button> 
                    </Link>
                </div>
                

                
            </div>             

    )
 }
 