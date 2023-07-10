import '@/componentes/section/historia/historia.css'



const Historia = (props) => {
    return (
        <section>
            <div className="areaPrincipalHistoria">
                {props.data.map((item, index) => (
                    <>
                        <div className='tituloSessaoHistoria'>{item.title}</div>
                        <div className="columns-container" key={index}>
                            <div className="esquerda-column">
                                <img className="jordan" src={item.background.image} />
                            </div>
                            <div className="direita-column">
                                <p className="texto-jordan">{item.content}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </section>

    );
};


export default Historia;