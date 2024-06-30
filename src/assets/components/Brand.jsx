// Brand.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../img/logo-sushipe.png';
import combinacion6p from '../img/combinacion-6p.jpg';
import combinacion4 from '../img/combinacion-4.jpg';
import combinacion1 from '../img/combinacion-1.jpg';

const backgroundChange = keyframes`
  0% {
    background-image: url(${combinacion6p});
  }
  33% {
    background-image: url(${combinacion1});
  }
  66% {
    background-image: url(${combinacion4});
  }
  100% {
    background-image: url(${combinacion6p});
  }
`;

const ImagenFondo = styled.div`
  position: relative;
  min-height: 400px;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 60rem;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -1;
    animation: ${backgroundChange} 15s infinite;
  }
`;

function Brand() {
    return (
        <div className="rounded-3">
            <div className="container-fluid py-2">
                <div className='container-fluid d-flex justify-content-center'>
                    <img className="display-5 fw-bold logo text-center" src={logo} alt="Logo" />
                </div>
                <ImagenFondo className='row'>
                    <div className="col-md-8 fs-4 mt-3 ms-3">
                        <h3>
                            ¡Cocina japonesa y Peruana
                            <small className="text-muted ms-2">De alta calidad a un precio justo!</small>
                        </h3>
                    </div>
                    <div className="col-md-2 mt-3">
                        <button className="btn btn-lg text-white" type="button">
                            <i className="fa-solid fa-right-to-bracket"></i> <span className='ms-2'>Iniciar Sesión </span>
                        </button>
                    </div>
                    <div className='container fluid text-center'>
                        <button className="btn btn-lg text-white border" type="button">
                            <i className="fa-solid fa-motorcycle logo-big mt-2"></i> <p>Delivery </p>
                        </button>
                        <button className="btn btn-lg text-white border ms-5" type="button">
                            <i className="fa-solid fa-bag-shopping logo-big mt-2"></i> <p>Para Retirar </p>
                        </button>
                    </div>
                    <div className='container-fluid text-center'>
                        <button className="btn btn-lg text-white border" type="button">
                            <i className="fa-solid fa-kitchen-set pedir mt-2"></i> <p className='pedir'>Pedir </p>
                        </button>
                    </div>
                </ImagenFondo>
            </div>
        </div>
    );
}

export default Brand;


