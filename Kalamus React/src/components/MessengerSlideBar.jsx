
import { Nav } from 'react-bootstrap';


export default function Sidebar() {
    return (
        <Nav className="flex-column sidebar">
            <Nav.Link className="mailButton" href="#">New Message</Nav.Link>
            <Nav.Link className="mailButton"  href="#">Inbox <span className="badge bg-primary">120</span></Nav.Link>
            <Nav.Link className="mailButton"  href="#">Sent Mails</Nav.Link>
            <Nav.Link className="mailButton"  href="#">Drafts</Nav.Link>
            <Nav.Link className="mailButton"  href="#">All Mail</Nav.Link>
            <Nav.Link className="mailButton"  href="#">Favourites</Nav.Link>
            <Nav.Link className="mailButton"  href="#">Spam</Nav.Link>
            <Nav.Link className="mailButton"  href="#">Trash</Nav.Link>
            <Nav.Item className="mt-4 mailButton">Labels</Nav.Item>
            <Nav.Link className="mailButton" href="#">Personal</Nav.Link>
            <Nav.Link className="mailButton"  href="#">Work</Nav.Link>
            <Nav.Link className="mailButton" href="#">Social</Nav.Link>
        </Nav>
    );
}

