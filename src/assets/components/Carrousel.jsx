import React from 'react';
import Card from '../components/Card';
import promo60 from '../img/promo-60.jpg';
import promo25 from '../img/promo-25.jpg';
import trioHot from '../img/trio-hot.jpg';
import promo40 from '../img/promo-40.jpg';
import promoSinArroz from '../img/promo-sin-arroz.png';

function Carousel() {
    // Array de objetos que contiene la información de cada tarjeta
    const cardsData = [
        {
            id: 1,
            nombre: 'Promo 25',
            imagen: promo25,
            descripcion: '1 Furai Roll\n1 California Ebi\n5 Arrollados Primavera',
            precio: '9.990'
        },
        {
            id: 2,
            nombre: 'Promo 40',
            imagen: promo40,
            descripcion: '1 Ebi Furai\n1 California Roll\n1 Chicken Hot\n1 Sake Maki\n4 Arrollados Primavera',
            precio: '12.990'
        },
        {
            id: 3,
            nombre: 'Promo 60',
            imagen: promo60,
            descripcion: '1 furai sake roll\n1 avocado sake\n1 california ebi chesse\n1 california roll\n1 chicken hot\n5 gyozas\n5 arrollados',
            precio: '24.990'
        },
        {
            id: 4,
            nombre: 'Trío Hot',
            imagen: trioHot,
            descripcion: '1 Furai Sake\n1 Tori Roll\n1 Chicken Hot',
            precio: '10.990'
        },
        {
            id: 5,
            nombre: 'Promo Sin Arroz',
            imagen: promoSinArroz,
            descripcion: '3 rolls sin arroz + 2 bebidas a elección',
            precio: '17.490'
        }
    ];

    return (
        <div className="rounded-3">
            <div className='container-fluid py-2'>
                <div className='row'>
                    <div className="col-md-8 fs-4 mt-3 ms-3 mb-3">
                        <h3>
                            ¡Nuestras Promociones
                            <small className="text-muted ms-2">Para compartir al estilo Pe!</small>
                        </h3>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className="col-md-5">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {cardsData.map((card, index) => (
                                    <div key={card.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <Card
                                            nombre={card.nombre}
                                            imagen={card.imagen}
                                            descripcion={card.descripcion.split('\n').map((item, i) => (
                                                <p key={i}>{item}</p>
                                            ))}
                                            precio={card.precio}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;

