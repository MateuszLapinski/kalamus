import MyCalendar from '../components/MyCalendar';
import 'react-calendar/dist/Calendar.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
function CalendarSide() {

    return (
        <>
            <Row className='PagesComponentHeader'>
            <Col className="titleContainer">Calendar</Col>
                <Col className="Buttons" style={{
                    display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                         Add Event
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Meeting</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Presentation</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Internat Meeting</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button className='CalendarButton'>
<<<<<<< HEAD
                        <Image style={{ width: '14px', marginRight: '5px', verticalAlign: 'middle' }} src='public/calendar.png'></Image>
                        Select dates
                    </Button>
                    <Button className='CalendarButton'>
                        <Image style={{ width: '14px', marginRight: '5px', verticalAlign: 'middle' }} src='public/star.png'></Image>
=======
                        <Image style={{ width: '14px', marginRight: '5px', verticalAlign: 'middle' }} src='/Image/calendar.png'></Image>
                        Select dates
                    </Button>
                    <Button className='CalendarButton'>
                        <Image style={{ width: '14px', marginRight: '5px', verticalAlign: 'middle' }} src='/Image/star.png'></Image>
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
                        Favorites </Button>
            
            </Col>
        </Row>
        <div className="calendarPageWrapper">
            <MyCalendar local='calendarMain'/>
        </div>
        </>
    );

}

export default CalendarSide;