import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Background from '../assets/eurovision-main.jpeg';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header con imagen de portada */}
            <header style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Bienvenido a la página de fans de Eurovisión</h1>
            </header>

            {/* Sección descriptiva */}
            <Container className="py-5 flex-grow-1">
                <Row className="justify-content-center text-center mb-5">
                    <Col md={8}>
                        <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Tu enciclopedia musical sobre Eurovisión</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555' }}>
                            Explora las ediciones históricas del Festival de Eurovisión, descubre los países participantes, las canciones que marcaron época, y toda la información clave de cada edición.
                        </p>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col md={4}>
                        <h4>+60 Años de Historia</h4>
                        <p>Desde 1956 hasta hoy, todas las ediciones recopiladas.</p>
                    </Col>
                    <Col md={4}>
                        <h4>Canciones y Artistas</h4>
                        <p>Descubre cada actuación, con datos, imágenes y más.</p>
                    </Col>
                    <Col md={4}>
                        <h4>Exploración Intuitiva</h4>
                        <p>Filtra por año, país o edición favorita.</p>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-light text-center py-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} Eurovisión Database - Creado con React y Bootstrap</p>
            </footer>
        </div>
    );
};

export default Home;
