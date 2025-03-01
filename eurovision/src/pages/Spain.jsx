import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import { getSpainSongs } from '../js/spainService';
import '../css/Spain.css';

const Spain = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchSongs = async () => {
            const spainSongs = await getSpainSongs();
            setSongs(spainSongs);
        };
        fetchSongs();
    }, []);

    // Función para abrir el modal con la canción seleccionada
    const handleShow = (song) => {
        setSelectedSong(song);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const handleClose = () => {
        setShowModal(false);
        setSelectedSong(null);
    };

    return (
        <Container>
            <h1>España</h1>
            <Row>
                {songs.map((song) => (
                    <Col key={song.id} xs={6} sm={6} md={4} lg={3} className="mb-4">
                        <div className="image-container" onClick={() => handleShow(song)} style={{ cursor: 'pointer' }}>
                            <Image
                                src={song.image}
                                alt={song.title}
                                className="hover-effect"
                                fluid
                                rounded
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            <div className="overlay">
                                <div
                                    className="text"
                                    style={{
                                        color: 'white',
                                        textShadow: '2px 2px 4px black'
                                    }}
                                >
                                    {song.artist}
                                </div>
                            </div>

                        </div>
                    </Col>
                ))}
            </Row>

            {/* Modal para mostrar detalles de la canción */}
            <Modal show={showModal} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedSong?.title} - {selectedSong?.artist}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedSong && (
                        <Row>
                            <Col md={6} className="mb-4">
                                <Image src={selectedSong.image} alt={selectedSong.title} fluid rounded className="hover-effect" />
                            </Col>
                            <Col md={6}>
                                <p><strong>Artista:</strong> {selectedSong.artist}</p>
                                <p><strong>Información:</strong> {selectedSong.information}</p>
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </Container >
    );
};

export default Spain;
