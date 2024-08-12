import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom"
export default function SideButton({children, imagesrc, linkto, id='navbutton'}) {
    return (
        <Link to={linkto} className="menu d-block" id={id}>      
            <Row>
            <Col xs={3} className="sidePaneImage">
                <Image src={imagesrc} className="sideimg"></Image>
            </Col>
            <Col>
                <div className="SideButton">
                    <h3>{children}</h3>
                </div>
            </Col>
           
            </Row>
        </Link>
    );
}