import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter, BsDiscord, BsYoutube  } from "react-icons/bs";
import './FooterStyle.css'
import img1 from '../assets/Logo.png'
import TikTok from '../assets/TikTok.png'
import Medium from '../assets/Medium.png'


export const Footer = () => {

    return (
        <div className="bg-dark footer-card">
            <div className="text-center">
                <img src={img1} alt="" className="img-footer"/>
            </div>
            <div className="text-center">
                <a href="#" className='footer-item'> <BsInstagram /> </a>
                <a href="#" className='footer-item'> <BsFacebook /> </a>
                <a href="#" className='footer-item'> <BsLinkedin /> </a>
                <a href="#" className='footer-item'> <BsTwitter /> </a>
            </div>
            <div className="text-center">
                <a href="#" className='footer-item'> <img src={TikTok} alt="" className="TikTok"/> </a>
                <a href="#" className='footer-item'> <BsDiscord /></a>
                <a href="#" className='footer-item'> <BsYoutube /></a>
                <a href="#" className='footer-item'> <a href="#" className='footer-item'> <img src={Medium} alt="" className="TikTok"/> </a> </a>
            </div>
            <p className="text-footer"> © 2022 FCamara Formação e Consultoria. Todos os direitos reservados.</p>

        </div>

    )
}