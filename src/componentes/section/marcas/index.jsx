import '@/componentes/section/marcas/marcas.css'

const Marcas = (props) => {
    return (
        <section>
            <div className='marcas-container'>  
                <div className="marcas-section-title">{props.data.title}</div>
                <img className="marcas-bg-left" src={props.data.background.left}/>
                <img className="marcas-bg-right" src={props.data.background.right}/>
                <div className='marcas-logos-area'>
                    {props.data.logos.map((logo, index) => 
                        <img key={index} className='marcas-logo' src={logo}/>
                    )} 
                </div>
            </div>
        </section>
    )
}

export default Marcas;