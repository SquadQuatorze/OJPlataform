import Alura from '../assets/Alura.png'
import Rocketseat from '../assets/Rocketseat.png'
import Pimg from '../assets/Pimg.png'
import Proa from '../assets/Proa.png'
import Resilia from '../assets/Resilia.png'
import Imgbird from '../assets/Imgbird.png'
import './StartPage.css'


export const PartnerStartPage = () => {

    return (
        <div className='text-center card-partner ' > 
            <h2 className='text-partner'>Quem acredita na gente?</h2>
            <div className='icons-partner'>
                <img src={Alura} alt="" className='icon-partner' />
                <img src={Rocketseat} alt="" />
                <img src={Pimg} alt="" />
                <img src={Proa} alt="" />
                <img src={Resilia} alt="" />
                <img src={Imgbird} alt="" />
            </div>

        </div>

    )
}