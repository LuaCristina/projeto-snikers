import '@/componentes/section/historia/historia.css'



const Historia = (props) => {
    return (
        <section>
            <div className="areaPrincipalHistoria">
                <div className='tituloSessaoHistoria'>{props.data.title}</div>
                {props.data.map((item, index) => (
                    <div className="columns-container" key={index}>
                        <div className="esquerda-column">
                            <img className="jordan" src={item.background.image} />
                        </div>
                        <div className="direita-column">
                            <p className="texto-jordan">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>



    );
};


export default Historia;