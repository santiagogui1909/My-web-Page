import './Menu.css';

const Menu = ({onScroll}) => {

    const top = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }

    return (
        <nav className={`container-menu ${onScroll > 20 ? "scroll" : null}`}>
            <a href="#top"><span className="icon-home"></span>Inicio</a>
            <a href="#about"> <span className="icon-child"></span>¿Quien Soy?</a>
            <a href="#conocimientos"><span className="icon-commenting"></span>Conocimientos</a>
            <a href="#portafolio"><span className="icon-folder-open"></span>Portafolio</a>
            <a href="#contacto"> <span className="icon-user-add"></span>Contacto</a>
        </nav>
    )
}

export default Menu;