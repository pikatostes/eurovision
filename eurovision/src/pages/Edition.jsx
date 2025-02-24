import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getEditions } from '../js/editionsService';

const Edition = () => {
    const [editions, setEditions] = useState([]);

    useEffect(() => {
        const fetchEditions = async () => {
            const fetchedEditions = await getEditions();
            setEditions(fetchedEditions);
        };
        fetchEditions();
    }, []);

    return (
        <Container>
            <h1>Ediciones</h1>
            <Row>
                {editions.map((edition) => (
                    <Col key={edition.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <div className="text">{edition.year}</div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Edition;
