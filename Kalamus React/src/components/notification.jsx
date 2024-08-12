import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Notification() {
    return (
        <>
            <Row>
                <Col className='col-9'>
                    <h4 className='notificationHeader'>Activities Notification</h4>
                </Col>
                <Col>
                    <a href="/notes" className="notificationButton" tabindex="-1" role="button" aria-disabled="true">View All</a>
                </Col>
            </Row>
            <div className="notificationSingle">
                <h4> Lorem Ipsum </h4>
                <h6> Some Data </h6>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae mattis sapien.
                    Cras venenatis imperdiet sem, sed cursus mi fringilla sit amet.
                    Aenean leo odio, vehicula sit amet enim nec, tristique fermentum quam.
                    Donec ligula ligula, posuere ut vestibulum sed, posuere facilisis dolor.
                    Vivamus vulputate magna a mi vestibulum faucibus. </p>
                <div className="line">
                </div>
            </div>
            <div className="notificationSingle">
                <h4> Lorem Ipsum </h4>
                <h6> Some Data </h6>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae mattis sapien.
                    Cras venenatis imperdiet sem, sed cursus mi fringilla sit amet.
                    Aenean leo odio, vehicula sit amet enim nec, tristique fermentum quam.
                    Donec ligula ligula, posuere ut vestibulum sed, posuere facilisis dolor.
                    Vivamus vulputate magna a mi vestibulum faucibus. </p>
                <div className="line">
                </div>
            </div>
        
        
        </>
        
    );
}