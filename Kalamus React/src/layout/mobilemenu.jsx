
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function MobileMenu(){

    return (
        <Nav
            className="me-auto my-2 my-lg-0 mobileMenu"
            style={{ maxHeight: '300px' }}
            navbarScroll
        >

            <Nav.Link>
                <Link to='/' className="d-block">
                    Summary
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/calendar' className="d-block">
                    Calendar
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/sale' className="d-block">
                    Sale
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/clients' className="d-block">
                    Clients
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/meetings' className="d-block">
                    Meetings
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/messenges' className="d-block">
                    Messenges
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/tasks' className="d-block">
                    Tasks
                </Link>
            </Nav.Link>
        </Nav>

    );
}
