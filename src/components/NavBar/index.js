import 'bootstrap/js/dist/collapse';

function  NavBar({menu}){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="" className="navbar-band">
                <i className="bi bi-github d-inline-block"></i>
                <span className="ms-3 d-inline-block">GitHub Alternativo</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menu.map(item => {
                            return (
                                <li className="nav-item" key={item.id}>
                                    <a href="{item.caminho}" className="nav-link">{item.titulo}</a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;