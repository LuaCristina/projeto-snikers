import Titulo from "@/componentes/commons/Titulo";
import Titulo2 from "@/componentes/commons/Titulo2";
import '@/componentes/section/main/main.css'
import Tenis from "@/img/tenis_grande.png"

export default function Index() {
    return (
        <section>
            <div className="principal sectionMarge">
                <div className="container">
                    {/* Conteúdo do contêiner */}
                    <div>
                        <h1 id="tituloPrincipal">JOGUE PARA GANHAR</h1>
                    </div>
                    <div>
                        <div id="bola"></div>
                        <img className="tenis" src={Tenis} />
                    </div>
                    <div>
                        <h2 id="subtitulo">DOMINE A QUADRA NO SEU ESTILO</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
