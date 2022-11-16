import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './DropdownStyles.css'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import fcamara from '../assets/fcamara.jpg'

export const DropdownCompIntro = () => {

    return (
        
        <div>
            <div className="d-flex" > 
                <img src={fcamara} alt="" className="fcamara"/>
                <p className="text-class">[LIVE] Coisas que você deveria saber antes de trabalhar em equipe</p>
            </div>
            <div className='  '> 
                <div className="accordion accordion-flush" id="accordionFlushExample"> {/* accordion-one */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            O ínicio 
                        </button>
                    </h2>

                    <div id="flush-collapseOne" className="accordion-collapse collapse  " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=gG0zZoj595U" className='text-decoration-none link-main'>[LIVE] Coisas que você deveria saber antes de trabalhar em equipe </a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=TmTupAe14T4" className='text-decoration-none link-main'>📢 Orange Juice Cast #17 - Scrum: uma revolução nas terras da T.I. - Jéssica, Maurício e Vinícius </a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=b9A34yUvzEc" className='text-decoration-none link-main'>Leandro Karnal em O Futuro da Liderança - BTG Bankers Experience 2021</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=pP5M7lf6JmQ" className='text-decoration-none link-main'>[LIVE] Selo Q.A. de qualidade</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=N78-5gHLzbE" className='text-decoration-none link-main'>[LIVE] Com grandes códigos, vem grandes responsabilidades</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=_ku7bY5GtIY" className='text-decoration-none link-main'>[LIVE] Product Owner, Scrum-Master e suas diferenças</a>  </div>
                            <div className="accordion-body"><a href="https://www.youtube.com/watch?v=n0KH8dQSrv0" className='text-decoration-none link-main'>[LIVE] Culture Code: O que faz ser quem somos</a>  </div>
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