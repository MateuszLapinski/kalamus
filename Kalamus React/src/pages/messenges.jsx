import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/MessengerSlideBar'
import InboxList from '../components/inboxList';
import EmailDetail from '../components/EmailDetail';
import React, { useState } from 'react';
function Messenges() {
    const emails = [
        {
            id: 1,
            subject: 'Your audience is growing.',
            snippet: 'These readers see your stories when they visit...',
            date: 'June 22',
            sender: 'Medium',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae mattis sapien. Cras venenatis imperdiet sem, sed cursus mi fringilla sit amet. Aenean leo odio, vehicula sit amet enim nec, tristique fermentum quam.',
            attachment: 'stat-file.pdf'
        },
        {
            id: 2,
            subject: 'Web design requirement for travel website',
            snippet: 'I contacted you to ask if you are interested and willing to help me...',
            date: 'June 22',
            sender: 'Wahyu Siburan',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae mattis sapien. Cras venenatis imperdiet sem, sed cursus mi fringilla sit amet. Aenean leo odio, vehicula sit amet enim nec, tristique fermentum quam.',

            attachment: 'detailproject.pdf'
        },
     
    ];
    const [selectedEmail, setSelectedEmail] = useState(null);
    const handleSelectEmail = (id) => {
        const email = emails.find(email => email.id === id);
        setSelectedEmail(email);
    };

    return (
        <Container fluid>
            <Row className='PagesComponentHeader'>
                <div className='titleContainer'>Messenges</div>
            </Row>
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={4}>
                    <InboxList emails={emails} onSelectEmail={handleSelectEmail} />
                </Col>
                <Col md={5}>
                    <EmailDetail email={selectedEmail} />
                </Col>
            </Row>
        </Container>
    );


}

export default Messenges;