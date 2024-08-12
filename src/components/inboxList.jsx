import { ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function InboxList({ emails, onSelectEmail }) {
    return (
        <ListGroup className="inbox-list">
            {emails.map(email => (
                <ListGroup.Item
                    key={email.id}
                    onClick={() => onSelectEmail(email.id)}
                    className="inbox-item"
                >
                    <div className="email-item">
                        <Row className="email-header align-items-center">
                            <Col md={9} className="d-flex align-items-center">
                                <span className="email-dot"></span>
                                <div className="email-subject">{email.subject}</div>
                            </Col>
                            <Col md={3} className="email-date">{email.date}</Col>
                        </Row>
                        <div className="email-body">
                            <div className="email-sender">{email.sender}</div>
                            <div className="email-snippet">{email.snippet}</div>
                            <div className="email-attachment">{email.attachment && <span>{email.attachment}</span>}</div>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}