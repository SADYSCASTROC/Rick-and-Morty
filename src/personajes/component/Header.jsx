import React from 'react'

export const Header = () => {
    return (
        <>
            <header>
                <div className="header">
                    <div className="container">
                        <div className="row d">
                                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                    <div className="collapse navbar-collapse" id="navbarsExample04 e">
                                        <ul className="navbar-nav mr-auto mb-5 ">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="service.html">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="gallery.html">Gallery</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    
                </div>
            </header>

        </>
    )
}
