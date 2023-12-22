import Image from 'react-bootstrap/Image';
import logo from '../logo.png'





const MyNavbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#221f1f" }}
        >
            <a className="navbar-brand" href="www">
                <Image
                    src={logo}
                    style={{ width: "100px", height: "55px" }}
                    alt="Logo"
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold" href="www">
                            TV Shows
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Movies
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Recently Added
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            My List
                        </a>
                    </li>
                </ul>
                <i className="fa fa-search icons"></i>
                <div id="kids">KIDS</div>
                <i className="fa fa-bell icons"></i>
                <i className="fa fa-user icons"></i>
            </div>
        </nav>
    );
};



        

export default MyNavbar