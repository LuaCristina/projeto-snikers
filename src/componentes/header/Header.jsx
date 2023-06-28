import '/Users/laura/IFTM/JS/projetoplayinssnk/src/componentes/header/header.css';
import Logo from '/Users/laura/IFTM/JS/projetoplayinssnk/src/img/logo.png'

export default function Header() {
    return (
        <header>
            <div className='min'>
                <img src={Logo} alt="Logo" />
                <h2 className='desktop-text'>Play In's SNK</h2>
                <h2 className='mobile-text'>PSNK</h2>

            </div>
        </header>
    )
}