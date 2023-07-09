import '@/componentes/section/main/main.css'

const Index = (props) => {
    return ( 
        <div className="principal">
            <div className="background-container">
                <video className="video-container"
                    poster={props.data.background.image} playsInline autoPlay loop muted>
                    {props.data.background.video.map((v, index) => 
                        <source key={index} type={v.type} src={v.url}/>
                    )}
                    
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