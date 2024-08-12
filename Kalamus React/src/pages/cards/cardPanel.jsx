import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom"
import AnotherCard from '../cards/anotherCard';

export default function CardPanel() {
    return (
        <Container>
            <Row>
                <Col xs-3 >
                    <Link to='/sale' className="d-block">
                        <SingleCard title="Sales (last Month)" srcimage="/Image/Sales.jpg" >
                            <p>3 423 444,534 PLN</p>
                        </SingleCard> \
                        </Link>
                </Col>
                <Col xs-3 >
                    <Link to='/meetings' className="d-block">
                    <SingleCard title="Meetings (this week)" srcimage="/Image/meeting.png" description="">
                       <p>6</p> 
                    </SingleCard>
                    </Link>
                </Col >
                <Col xs-3>
                    <SingleCard title="Messenges" srcimage="/Image/messenger-vector.png" >
                        <p className="messInfo"> 5 unreaded messenges</p>
                    </SingleCard>
                 </Col>
                 <Col>
                    <SingleCard title="Last Sale" srcimage="/Image/messenger-vector.png" >
                        <p>Client: XYZ S.A. <br/> Amount: 30413,44 </p>
                        
                    </SingleCard>
                 </Col>
            </Row>
        </Container>
    );
}
