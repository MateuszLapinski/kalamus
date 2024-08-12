import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom"
import AnotherCard from '../cards/anotherCard';

export default function AnotherCardPanel() {
    return (
        <Container>
            <Row>
                <Col >
                    <Link to='/sale' className="d-block">
                        <AnotherCard title="Sales (last Month)" srcimage="acquisition-red.png" colorClass='cardRed' >
                            <p>3 423 444,534 PLN</p>
                        </AnotherCard>
                    </Link>
                </Col>
                <Col >
                    <Link to='/meetings' className="d-block">
                        <AnotherCard title="Meetings (this week)" srcimage="meetingroom-violet.png" colorClass='cardBlue'>
                            <p>6</p>
                        </AnotherCard>
                    </Link>
                </Col >
                <Col>
                    <Link to='/messenges' className="d-block">
                    <AnotherCard title="Messenges" srcimage="messenger-yellow.png" colorClass='cardYellow' >
                        <p className="messInfo"> 5 unreaded messenges</p>
                        </AnotherCard>
                    </Link>
                </Col>
                <Col>
                    <Link to='/sale' className="d-block">
                    <AnotherCard title="Last Sale" srcimage="clipboard-green.png" colorClass='cardGreen' >
                        <p>Client: XYZ S.A. <br /> Amount: 30413,44 </p>

                        </AnotherCard>
                    </Link>
                </Col>
            </Row>
        </Container>
        
    );
}