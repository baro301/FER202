import React from 'react';
import hawaiian from './hawaiian.png';
import margherita from './margherita.png';
import mushroom from './mushroom.png';
import neapolitan from './neapolitan.png';
import pesto from './pesto.png';
import './home.css';

export default function home() {
    const pizzas = [
        { name: 'Margherita Pizza', img: margherita, price: 40.00, salePrice: 24.00, sale: true, isNew: false },
        { name: 'Mushroom Pizza', img: mushroom, price: 25.00, sale: false, isNew: false },
        { name: 'Hawaiian Pizza', img: hawaiian, price: 30.00, sale: false, isNew: true },
        { name: 'Pesto Pizza', img: pesto, price: 50.00, salePrice: 30.00, sale: true, isNew: false },
    ];
    return (
        <div className="bg-dark text-white min-vh-100">
            {/* Header */}
            <header className="bg-dark text-white py-2">
                <div className="container d-flex align-items-center justify-content-between">
                    <h2>Pizza House</h2>
                    <nav className="d-flex gap-5">
                        <a href="#" className="text-white text-decoration-none">Home</a>
                        <a href="#" className="text-white text-decoration-none">About Us</a>
                        <a href="#" className="text-white text-decoration-none">Contact</a>
                    </nav>
                    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control form-control-sm me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-warning btn-sm" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </header>

            {/* Banner */}
            <section className="position-relative">
                <img
                    src={neapolitan}
                    alt="Neapolitan Pizza"
                    className="w-100"
                    style={{ height: '400px', objectFit: 'cover', opacity: 0.85 }}
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h2 className="fw-bold">Neapolitan Pizza</h2>
                    <p className="small">If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
                </div>
            </section>

            {/* Menu */}
            <section className="container py-5">
                <h3 className="text-center mb-4">Our Menu</h3>
                <div className="row g-4">
                    {pizzas.map((p, index) => (
                        <div className="col-12 col-sm-6 col-md-3" key={index}>
                            <div className="card h-100 text-dark">
                                <div className="position-relative">
                                    <img src={p.img} className="card-img-top" alt={p.name} />
                                    {p.sale && (
                                        <span className="badge bg-danger position-absolute top-0 start-0 m-2">SALE</span>
                                    )}
                                    {p.isNew && (
                                        <span className="badge bg-success position-absolute top-0 start-0 m-2">NEW</span>
                                    )}
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">{p.name}</h6>
                                    <p className="mb-2">
                                        {p.sale ? (
                                            <>
                                                <span className="text-muted text-decoration-line-through me-1">
                                                    ${p.price.toFixed(2)}
                                                </span>
                                                <span className="text-warning fw-bold">${p.salePrice.toFixed(2)}</span>
                                            </>
                                        ) : (
                                            <span className="fw-bold">${p.price.toFixed(2)}</span>
                                        )}
                                    </p>
                                    <button className="btn btn-dark btn-sm">Buy</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Booking */}
            <section className="container py-5">
                <h3 className="text-center mb-4">Book Your Table</h3>
                <form className="text-dark bg-light p-4 rounded">
                    <div className="row g-3 mb-3">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Your Name *" required />
                        </div>
                        <div className="col-md-4">
                            <input type="email" className="form-control" placeholder="Your Email *" required />
                        </div>
                        <div className="col-md-4">
                            <select className="form-select">
                                <option>Select a Service</option>
                                <option>Dine-in</option>
                                <option>Takeaway</option>
                                <option>Delivery</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-warning px-4" type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </section>

            {/* Footer */}
            <footer className="bg-warning text-dark text-center py-3">
                <div className="container small">
                    © 2025 Pizza House — All rights reserved
                </div>
            </footer>
        </div>
    );
}
