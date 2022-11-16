import { BsYoutube, BsTextParagraph, BsBook, BsLink45Deg, BsClipboardCheck } from "react-icons/bs";
import { GoMortarBoard } from "react-icons/go";
import './StartPage.css'
import { Link } from "react-router-dom";

export const LinksStartPage = () => {

    return (
        <div className="card-links ">
            <div className="links-itens d-flex justify-content-between">
                <div className="text-center ">
                    <div className="link-icon" > 
                        <BsYoutube color='##212529' className="icon-img " />   
                                        
                    </div>

                    <div className="link-item">
                        <h2 >Vídeos</h2>
                    <p>Horas de vídeos e lives para você assistir, dos <br/> principais canais de tecnologia no YouTube.</p>                    
                    </div>               
                </div>
                <div className="text-center">
                    <div className="link-icon text-center">
                        <BsTextParagraph color='#212529' className="icon-img"  />
                    </div>
                    <div className="link-item">
                        <h2>Artigos</h2>
                        <p>Quer se aprofundar em um assunto? Veja os <br/> artigos dos mais variados temas da área tech, dos <br/> mais amplos aos mais especificos</p>                  
                    </div>                 
                </div>

                <div className="text-center">
                    <div className="link-icon text-center">
                        <GoMortarBoard color='#212529' className="icon-img" />                    
                    </div>
                    <div className="link-item"> 
                        <h2>Cursos</h2>
                        <p>Cursos introdutórios para te dar aquele pontapé <br/> iniciail na sua área de interesse.</p>                               
                    </div>                    
                </div>


            </div>
            <div className="links-itens d-flex justify-content-between">
                <div className="text-center  ">
                    <div className="link-icon1 text-center  ">
                        <BsBook color='#212529' className="icon-img " />
                    </div>
                    <div className="link-item">
                        <h2>Livros</h2>
                        <p>Bônus com dicas de livros para você se aprofundar e se <br/> preparar ainda mais.</p>                    
                    </div>                    
                </div>
                <div className="text-center">
                    <div className="link-icon text-center">
                        <BsLink45Deg color='#212529' className="icon-img"  />                
                    </div>
                    <div className="link-item"> 
                        <h2>Links úteis</h2>
                        <p>Glossários, agregadores de conteúdo, desafios, <br/> kits de ferramentas, templates gratuitos.</p>         
                    </div>               
                </div>
                <div className="text-center">
                    <div className="link-icon text-center">
                        <BsClipboardCheck color='#212529' className="icon-img" />
                    </div>
                    <div className="link-item">
                        <h2>Desafios</h2>
                        <p>Depois de aprender, é a hora de colocar a mão na <br/> massa! Coloque o que você aprendeu em prática.</p>                    
                    </div>                    
                </div>
                



                
            </div>
            <div className="text-center ">
                <Link to="/trilhas"><button className="link-button">Acessar as Trilhas</button> </Link>         
            </div>

        </div>

    )
}