import { Card, Row, Col, Badge } from 'react-bootstrap';
export default function PriceSummary() {
    return (
        <Row className="price-summary">
            <Col md={4}>
            
                <Card className="sales-card">
                    <Card.Body>
                        <Card.Title>John Doe</Card.Title>
                        <Card.Text>Total Sales: $10,500,000</Card.Text>
                        <Card.Text>E-mail Adress: john@example.com</Card.Text>
                        <Card.Text>Sales in last month: $403, 043</Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="orders-card">
                    <Card.Body>
                        <div className="icon-badge">
<<<<<<< HEAD
                            <img src="public/acquisition.png" alt="icon" className="icon" />
=======
                            <img src="/Image/acquisition.png" alt="icon" className="icon" />
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
                            <Badge bg="success" className="badge">+2.08%</Badge>
                        </div>
                        <Card.Title>Paid so far</Card.Title>
                        <Card.Text>$8,372,028</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Left to be paid $2,372,028</Card.Subtitle>
                    </Card.Body>
                </Card>
                          </Col>
            <Col md={4}>
                <Card className="orders-card">
                    <Card.Body>
                        <div className="icon-badge">
<<<<<<< HEAD
                            <img src="public/acquisition.png" alt="icon" className="icon" />
=======
                            <img src="/Image/acquisition.png" alt="icon" className="icon" />
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
                            <Badge bg="success" className="badge">+2.08%</Badge>
                        </div>
                        <Card.Title>Completion date</Card.Title>
                        <Card.Text>01.12.2019</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">345 days left until completion</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

