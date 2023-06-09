import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/images/recipe1.jpg'
import second from '../../../assets/images/recipe2.jpg'
import third from '../../../assets/images/recipe3.jpg'
import forth from '../../../assets/images/recipe4.jpg'
import fifth from '../../../assets/images/recipe5.jpg'
import sixth from '../../../assets/images/recipe6.jpg'

const RecipeSection = () => {
    return (
        <div>
            <h2>Recipe Part</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first}/>
                        <Card.Body>
                            <Card.Title>Vegetables</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second}/>
                        <Card.Body>
                            <Card.Title>Pizza</Card.Title>
                          
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third}/>
                        <Card.Body>
                            <Card.Title>Fried</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={forth}/>
                        <Card.Body>
                            <Card.Title>Fruits</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={fifth}/>
                        <Card.Body>
                            <Card.Title>Noodles</Card.Title>
                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={sixth}/>
                        <Card.Body>
                            <Card.Title>Chicken</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default RecipeSection;