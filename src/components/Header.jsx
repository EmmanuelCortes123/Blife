import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div>
                    <img src={require('../images/blifelogo.png')} alt="" />
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/home">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Promociones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-disabled="true" to="/login">Nosotros</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <a className="icon-link col-md text-decoration-none" href="#">
                            <img className="iconos m-2" src={require('../images/serch.png')} width={15} height={15} />
                        </a>
                        <a className="icon-link col-md" href="#">
                            <img className="iconos m-2" src={require('../images/user.png')} width={15} height={15} />
                        </a>
                        <a className="icon-link" href="#">
                            <img className="iconos m-2" src={require('../images/compra.png')} width={15} height={15} />
                        </a>
                    </div>

                </div>
            </div>
        </nav>

    );
}

export default Header;