import '@/componentes/header/header.css';
import Logo from '@/img/logo.png'

const Header = (props) => {
    return (
        <div className="min">
            <img src={Logo} alt="Logo" />
            <h2 className="desktop-text">Play In's SNK</h2>
        </div>
    );
}

export default Header;