import { Routes, Route } from "react-router-dom";
import { StartPage } from './Pages/StartPage'
import { TrilhasPage } from './Pages/TrilhasPage';
import { LoginPage } from './Pages/LoginPage';
import { MainUXFundamentosPage } from './Pages/MainUXFundamentosPage';
import { CreateAccountPage } from './Pages/CreateAccountPage';
import { ArtigosPage } from './Pages/ArtigosPage';
import { MainUIFundamentosPage } from './Pages/MainUIFundamentosPage';
import { MainIntroPage } from './Pages/MainIntroPage';
import { MainFullStackPage } from './Pages/MainFullStackPage';
import { MainQAPage } from './Pages/MainQAPage';



function App() {
  return (

    <div >
        <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/createaccount" element={<CreateAccountPage />}/>
          <Route path="/trilhas" element={<TrilhasPage />}/>
          <Route path="/ux-fundamentos" element={<MainUXFundamentosPage />}/>
          <Route path="/ui-fundamentos" element={<MainUIFundamentosPage />}/>
          <Route path="/fullstack" element={<MainFullStackPage />}/>
          <Route path="/introducao" element={<MainIntroPage />}/>
          <Route path="/artigos-ux" element={<ArtigosPage />}/>
          <Route path="/QA" element = {<MainQAPage />} />
        </Routes>
        {/* <LoginPage /> */}
    </div>

  )
}

export default App
