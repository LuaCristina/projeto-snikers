import '@/componentes/section/main/main.css'

const Index = (props) => {
    return (
        <section>
            <div className="principal sectionMarge">
                <div className="container">
                    {/* Conteúdo do contêiner */}
                    <div>
                        <h1 id="tituloPrincipal">{props.data.title}</h1>
                    </div>
                    <div>
                        <div id="bola"></div>
                        <img className="tenis" src={props.data.image} />
                    </div>
                    <div>
                        <h2 id="subtitulo">{props.data.subtitle}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;