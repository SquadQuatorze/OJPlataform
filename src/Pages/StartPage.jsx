import { Footer } from "../Components/Footer"
import { NavBarLogin } from "../Components/NavBarLogin"
import { IntroStartPage } from "../Components/IntroStartPage"
import { LinksStartPage } from "../Components/LinksStartPage"
import { PartnerStartPage } from "../Components/PartnerStartPage"

export const StartPage = () => {

   return (
        <div>
            <NavBarLogin />
            <IntroStartPage />
            <LinksStartPage />
            <PartnerStartPage />
            <Footer />
        </div>
   )
}