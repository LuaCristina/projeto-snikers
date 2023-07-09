import '@/componentes/section/main/main.css'

const Index = (props) => {
    return ( 
        <div className="principal">
            <div className="background-container">
                <video className="video-container" playsInline autoPlay loop muted>
                    <source type="video/webm" src={props.data.background.video}/>
                    <img className="image-container" src={props.data.background.image}/>
                </video>
            </div>
            
            <div className="area">
                {/* Conteúdo do contêiner */}
                <div className="left-column"> 
                    <div className="titulos">
                        <h1 id="tituloPrincipal">{props.data.title}</h1>
                        <h2 id="subtitulo">{props.data.subtitle}</h2>
                    </div>
                </div>

                <div className="right-column">
                    <div className="imagemPrincipal">
                        <div id="bola"></div>
                        <img className="tenis" src={props.data.image} />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Index;