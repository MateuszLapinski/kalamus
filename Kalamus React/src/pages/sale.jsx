import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import ProductStatsCard from '../components/ProductStatsCard';

function Sale() {
    return (
        <Container fluid>
            <Row className='PagesComponentHeader'>
                <div className='titleContainer'>Sales</div>
            </Row>
            <Row className="mb-4">
                <Col md={3}>
                    <Card className="sales-card">
                        <Card.Body>
                            <div className="icon-badge">
                                <img src="/Image/acquisition.png" alt="icon" className="icon" />
                                <Badge bg="success" className="badge">+2.08%</Badge>
                            </div>
                            <Card.Title>Total Sales</Card.Title>
                            <Card.Text className="sales-amount">
                                $612.917
                            </Card.Text>
                            <Card.Text className="sales-description">
                                Products vs last month
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                  
                    <Card className="order-card">
                        <Card.Body>
                            <div className="icon-badge">
                                <img src="/Image/acquisition.png" alt="icon" className="icon" />
                                <Badge bg="success" className="badge">+2.4%</Badge>
                            </div>
                            <Card.Title>Total Orders</Card.Title>
                            <Card.Text>
                                <h2>3,476</h2>
                                Orders in last month
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                   
                    <Card className="order-card">
                        <Card.Body>
                            <div className="icon-badge">
                                <img src="/Image/acquisition.png" alt="icon" className="icon" />
                                <Badge bg="danger" className="badge">-2.9%</Badge>
                            </div>
                            <Card.Title>Sales (GELATO)</Card.Title>
                            <Card.Text>
                                <h2>14,987</h2>
                                Products in last month
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                  
                    <Card className="order-card">
                        <Card.Body>
                            <div className="icon-badge">
                                <img src="/Image/acquisition.png" alt="icon" className="icon" />
                                <Badge bg="danger" className="badge">-2.9%</Badge>
                            </div>
                            <Card.Title>Total Sales (Quantity)</Card.Title>
                            <Card.Text>
                                <h2>12,987</h2>
                                Products in last month
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Product Statistic</Card.Title>
                            <Card.Text>Track your product sales</Card.Text>
                            <ProductStatsCard column1='ID' column2='Product' column3='Sales' column4='Revenue' />
                            <div style={{ background: '#f8f9fa' }}></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Customer Growth</Card.Title>
                            <Card.Text>Track customer by locations</Card.Text>
                            <ProductStatsCard column1='ID' column2='Invoice' column3='Client' column4='Amount' />
                            <div style={{ background: '#f8f9fa' }}></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}
    export default Sale;