import { Introdução } from "../Components/Introducao"
import {Fullstack } from "../Components/Fullstack"
import {NavBarLogin} from "../Components/NavBarLogin"
import { Ux } from "../Components/Ux"
import { QA } from "../Components/QA"
import { Footer } from "../Components/Footer"


export const TrilhasPage = () => {

   return (
        <div>
          <NavBarLogin />
          <Introdução />  
          <Fullstack />
          <Ux />
          <QA />
          <Footer />
        </div>
   )
}