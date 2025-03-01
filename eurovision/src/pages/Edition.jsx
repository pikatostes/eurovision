import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import initDatabase from '../../database';
import { getEditions } from '../js/editionsService';
import Country from './Country';

const Edition = () => {
    const [editions, setEditions] = useState([]);
    const [selectedEdition, setSelectedEdition] = useState(null);
    const [db, setDb] = useState(null);

    useEffect(() => {
        const initializeDatabase = async () => {
            const database = await initDatabase();
            setDb(database);
        };
        initializeDatabase();
    }, []);

    useEffect(() => {
        if (db) {
            const fetchEditions = async () => {
                const fetchedEditions = await getEditions(db);
                setEditions(fetchedEditions);
            };
            fetchEditions();
        }
    }, [db]);

    const handleEditionClick = (editionId) => {
        setSelectedEdition(editionId);
    };

    return (
        <Container fluid className="p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <h1 className="text-center mb-5" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#343a40' }}>
                Ediciones
            </h1>
            {selectedEdition ? (
                <Country editionId={selectedEdition} db={db} />
            ) : (
                <Row className="justify-content-center">
                    {editions.map((edition) => (
                        <Col key={edition.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card
                                onClick={() => handleEditionClick(edition.id)}
                                className="shadow-sm edition-card"
                                style={{ cursor: 'pointer', borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.2s ease-in-out' }}
                            >
                                <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '120px', backgroundColor: '#ffffff' }}>
                                    <Card.Title className="mb-0" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#495057' }}>
                                        {edition.year}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Edition;
