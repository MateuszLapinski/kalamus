import '../../App.css';
/*import CardPanel from '../cards/cardPanel'*/
import Chart, { CircleChart } from './Chart'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnotherCard from '../cards/anotherCard';
import AnotherCardPanel from '../cards/anotherCardPanel';
import Calendar from '../../components/MyCalendar';
import Notification from '../../components/notification';
export default function Summary() {
    return (

        <div className='mainContent'>
            <Row>
                <AnotherCardPanel/>
            </Row>
            <div className="line"> 
            </div>
            <Row>
                <Col className="ChartContainer">
                     <h4>Your Sales in last three months</h4>
                    <Chart /> 
                </Col>
          
                <Col className="ChartContainer ">
                     <h4>Your current Target</h4>
                     <CircleChart />
                </Col>
            </Row>
            <Row>
                <Col className="calendarContainer">
                    <h4>Calendar & Attendance</h4>
                    <Calendar></Calendar>
                </Col>
                <Col className="notificationContainer">
                    
                   <Notification></Notification>
                </Col>
            </Row>
        </div>
    );
}