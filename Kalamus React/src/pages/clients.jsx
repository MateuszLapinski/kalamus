import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LatestCommunications from '../components/LatestCommunications';
import CustomerList from '../components/CustomerList';
import PriceSummary from '../components/PriceSummary';
function Clients() {

    return (
        <>
            <Row className='PagesComponentHeader'>
                <div className='titleContainer'>Clients</div>
            </Row>
            <Row>
                <Col md={4}>
                    <CustomerList />
                </Col>
                <Col md={8}>
<<<<<<< HEAD
                    {/*<div className='clientContainer'> Client Informations</div>*/}
=======
                    <div className='clientContainer'> Client Informations</div>
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
                   
                    <PriceSummary />
                    <LatestCommunications />
                </Col>
            </Row>
        </>
    );

}

export default Clients;