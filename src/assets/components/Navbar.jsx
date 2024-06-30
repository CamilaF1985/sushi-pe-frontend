import React from 'react';
import logo from '../img/logo-sushipe.png'; 

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary lato-light">
        <div className="container-fluid d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img className="logo-navbar" src={logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item lato-light text-white ms-3">
                  Pedir
                </li>
                <li className="nav-item lato-light text-white ms-3">
                  Concepto
                </li>
                <li className="nav-item lato-light text-white ms-3">
                  Precios
                </li>
                <li className="nav-item lato-light text-white ms-3">
                  Calidad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;