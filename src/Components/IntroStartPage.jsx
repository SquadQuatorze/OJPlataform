import Print1 from '../assets/Print1.png'
import './StartPage.css'
import { Link } from "react-router-dom";

export const IntroStartPage = () => {

    return (
            <div className=''> 
                <div className="intro-itens">
                    <div>   
                        <h1 className='intro-title'>
                            Bora aprender mais sobre tecnologia? 
                        </h1>   
                        <p className="intro-paragraph">
                        O <strong>Orange Evolution</strong>  consiste em trilhas totalmente <strong>gratuitas</strong>  para que você possa iniciar a sua carreira na tecnologia.
                        </p>   
                        <div>
                            <Link to="/trilhas" className='text-decoration-none'><button className='intro-button'>Acessar Trilhas</button></Link>
                        </div >
                    </div>  
                    <div className=''>
                        <img src={Print1} alt="Duas mulheres em frente ao computador" className='intro-img'/>
                    </div>
                </div>                
            </div>
       



    )
}