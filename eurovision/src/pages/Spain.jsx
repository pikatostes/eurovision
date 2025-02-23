import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { getSpainSongs } from '../js/spainService';

const Spain = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const spainSongs = await getSpainSongs();
            setSongs(spainSongs);
        };
        fetchSongs();
    }, []);

    return (
        <Container>
            <h1>España</h1>
            <Row>
                {songs.map((song) => (
                    <Col key={song.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Image src={song.image} alt={song.title} fluid rounded />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Spain;