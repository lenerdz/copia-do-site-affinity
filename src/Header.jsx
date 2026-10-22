function Header() {
    return (
        <>
            <div className="container">
                <nav className="navbar md:navbar-expand bg-1">
                    <div className="container-fluid">
                        <a className="navbar-brand fonte-logo" href="#">Affinity</a>
                        <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" aria-hidden="true"></span>
                        </button>
                        <dialog className="drawer drawer-end" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                            <div className="drawer-header">
                                <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                            </div>
                            <div className="drawer-body mb-2 md:mb-0">
                                <ul className="nav navbar-nav me-auto">
                                    <li className="nav-item">
                                        <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                                            Produto
                                        </button>
                                        <div className="menu">
                                            <a className="menu-item" href="#">Action</a>
                                            <a className="menu-item" href="#">Another action</a>
                                            <hr className="menu-divider" />
                                            <a className="menu-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                                            Descubra
                                        </button>
                                        <div className="menu">
                                            <a className="menu-item" href="#">Action</a>
                                            <a className="menu-item" href="#">Another action</a>
                                            <hr className="menu-divider" />
                                            <a className="menu-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Ajuda</a>
                                    </li>

                                </ul>
                                <button type="button" className="btn-solid theme-success">Obtenha o Affinity</button>
                            </div>
                        </dialog>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
