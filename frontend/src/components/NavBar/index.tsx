import ImgDsDark from 'assets/img/ds_dark.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {   //mesma coisa se usar a funcao no lugar
    return (
        <div className="nav d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm">
            <div className="container">
                
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/">
                    <img src={ImgDsDark} alt="DevSuperior" width="200" />
                    </Link>
                </nav>
                
            </div>
        </div>
    );
}

export default NavBar;