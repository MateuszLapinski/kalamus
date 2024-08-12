import Card from 'react-bootstrap/Card';


export default function SingleCard({children, title, srcimage, description}) {
    return (
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={srcimage} className="cardImage" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>{description}</h5>
                    <Card.Text>
                        {children}
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}
