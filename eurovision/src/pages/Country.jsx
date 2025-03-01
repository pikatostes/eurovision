import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { getCountriesByEdition } from '../js/countryService';
import { getSongByCountryAndEdition } from '../js/songService';

const Country = ({ editionId, db }) => {
    const [countries, setCountries] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (db) {
            const countriesList = getCountriesByEdition(db, editionId);
            setCountries(countriesList);
        }
    }, [editionId, db]);

    const handleCountryClick = async (country) => {
        const songData = await getSongByCountryAndEdition(db, country, editionId);

        if (songData && songData.length >= 4) {
            const song = {
                title: songData[0],
                artist: songData[1],
                information: songData[2],
                image: songData[3],
            };
            setSelectedSong(song);
            setShowModal(true);
        } else {
            alert('No se encontró canción para este país y edición.');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSong(null);
    };

    return (
        <Container fluid className="p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2rem', color: '#343a40' }}>
                Países Participantes
            </h2>

            {countries.length > 0 ? (
                <Row className="justify-content-center">
                    {countries.map((country, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card
                                className="country-card shadow-sm"
                                style={{ cursor: 'pointer', borderRadius: '15px', transition: 'transform 0.2s ease-in-out' }}
                                onClick={() => handleCountryClick(country)}
                            >
                                <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '100px', backgroundColor: '#ffffff' }}>
                                    <Card.Title className="mb-0" style={{ fontWeight: '600', fontSize: '1.3rem', color: '#495057' }}>
                                        {country}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <p className="text-center text-muted">No hay países para esta edición.</p>
            )}

            {/* Modal moderno para mostrar detalles de la canción */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-truncate" style={{ maxWidth: '90%' }}>
                        {selectedSong?.title} - {selectedSong?.artist}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedSong ? (
                        <div className="text-center">
                            <img
                                src={selectedSong.image}
                                alt={selectedSong.title}
                                className="img-fluid mb-3 rounded shadow-sm"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <p className="text-muted text-start"><strong>Información:</strong> {selectedSong.information}</p>
                        </div>
                    ) : (
                        <p className="text-muted">No se encontraron detalles de la canción.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Country;

