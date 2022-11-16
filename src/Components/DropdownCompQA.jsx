import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './DropdownStyles.css'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export const DropdownCompQA = () => {

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
                           Testes Funcionais, Qualidades, BDD e Tipos de Testes
                        </button>
                    </h2>

                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=gVJ1Lap-JYA" className='text-decoration-none link-main'>Pirâmide de Testes #AluraMais </a>  </div>
                            <div className="accordion-body"><a href="https://ebaconline.com.br/webinars/workshop-qualidade-2021-09-14-15-16" className='text-decoration-none link-main'>Qualidade de Software com BDD: o que é, e como usar </a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=BMeOV1-senE" className='text-decoration-none link-main'>Como escrever casos de teste funcionais</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=YshnAC19nWk" className='text-decoration-none link-main'>TESTES FUNCIONAIS E TESTES NÃO FUNCIONAIS - Entendo as diferenças | Exemplos de utilização</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=voE1-yUY-Qg" className='text-decoration-none link-main'>Qualidade além dos bugs | Orange Week #4 🍊</a>  </div>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Bugs, Automação de Testes e QA no Back-End
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=3X7HwSEJ4Wc" className='text-decoration-none link-main'>Live #5: Como reportar bugs? (Parte 1)</a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=-D69DAipwl8" className='text-decoration-none link-main'>Live #6: Como reportar bugs? (Parte 2) </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=VvMh3BGlVdw" className='text-decoration-none link-main'>Como entender a Lógica para Automatizar Testes </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=B4fantyYPl0" className='text-decoration-none link-main'>As 10 principais camadas para Automatizar Testes </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=VqVQ7vHY32o&list=PLf8x7B3nFTl17WeEVj405tHlstiq1kNBX" className='text-decoration-none link-main'>Curso Gratuito de Introdução aos Testes de API Rest (Aula 1) </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=-xWqeLB0i1M" className='text-decoration-none link-main'>Automação de Contrato com Postman </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=wIjtX0CPaw0&list=PLnUo-Rbc3jjztMO4K8b-px4NE-630VNKY" className='text-decoration-none link-main'>Como fazer uma Interface mais fácil // UXNOW </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=wIjtX0CPaw0&list=PLnUo-Rbc3jjztMO4K8b-px4NE-630VNKY"className='text-decoration-none link-main'>Agilizei Spark - Treinamento Gratuito de Cypress </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=r-Ju-O_miv0" className='text-decoration-none link-main'>QArentena 66: Robot Framework, por Mayara R. Fernandes </a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=SzwAekL9-l0&list=PLrua1dSU7PC1KBRefR9HJTpU81K1jrcXL" className='text-decoration-none link-main'>Robot Framework: Introdução ao treinamento</a> </div>
                        <div className="accordion-body"> <a href="https://www.youtube.com/watch?v=aU8r82PTz-k&feature=youtu.be" className='text-decoration-none link-main'>A trilha do QA no Backend | Orange Talk🍊 </a> </div>

                    </div>
                </div>
                <div className="d-flex justify-content-center card-btn-dropdown">
                    <button className="btn-dropdown"><Link className="nav-item text-decoration-none " to="/trilhas"> <span className="text-btn-dropdown">Conhecer materiais complementares. </span>   </Link> <BsArrowRight /> </button> 
                </div>

                
                 </div>
            </div> 
        </div>            

    )
}