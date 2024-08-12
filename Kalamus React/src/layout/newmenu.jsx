
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import MobileMenu from './mobilemenu';
import StandardMenu from './standardmenu';

export default function Newmenu() { 



return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Link to='/' className="d-block">
                <Image src="dark-calamar-logo.webp" className="mobileLogo"></Image>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
                <Col className="topBarSearch">
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    </Form>
                </Col>
                    <StandardMenu />
                    <MobileMenu />
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}