import React from 'react';
import logo from '../img/logo-sushipe.png';  // Ruta relativa a la ubicación actual del componente

function Brand() {
    return (
        <>
            <div className="rounded-3">
                <div className="container-fluid py-2">
                    <div className='container-fluid d-flex justify-content-center'>
                        <img className="display-5 fw-bold logo text-center" src={logo} alt="Logo" />
                    </div>
                    <div className='row imagen-fondo'>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brand;

