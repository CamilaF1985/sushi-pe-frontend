import React from 'react';

function Card({ nombre, imagen, descripcion, precio }) {
    return (
        <div className='container-fluid'>
            <div className="card mb-3 lato-light">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start" alt="Producto" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text"><strong>${precio}</strong></p>
                            <button className="btn btn-primary">Ver producto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
