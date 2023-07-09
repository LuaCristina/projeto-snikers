import '@/componentes/header/header.css';
import Logo from '@/img/logo.png'

export default function Header() {
    return (
        <div className="min">
            <img src={Logo} alt="Logo" />
            <h2 className="desktop-text">Play In's SNK</h2>
        </div>
    );
}