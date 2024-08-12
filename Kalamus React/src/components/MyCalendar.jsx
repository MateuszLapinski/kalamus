import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, format, isSameMonth, isSameDay, addDays } from 'date-fns';


const Calendar = ({ local }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfWeek(endOfMonth(currentDate));

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
                <Col
                    className={`cell ${local} ${!isSameMonth(day, currentDate) ? "disabled" : isSameDay(day, currentDate) ? "selected" : ""}`}
                    key={day}
                    onClick={() => setCurrentDate(cloneDay)}
                >
                    <span className="number">{formattedDate}</span>
                </Col>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <Row key={day}>
                {days}
            </Row>
        );
        days = [];
    }

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    return (
        <div>
            <Row className="header row">
                <Col className="col-start">
                    <Button className="calendarButton" variant="light" onClick={prevMonth}>{"<"}</Button>
                </Col>
                <Col className="col-center">
                    <span>{format(currentDate, "MMMM yyyy")}</span>
                </Col>
                <Col className="col-end">
                    <Button className="calendarButton" variant="light" onClick={nextMonth}>{">"}</Button>
                </Col>
            </Row>
            <Row className="days row">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <Col className="col" key={index}>
                        {day}
                    </Col>
                ))}
            </Row>
            {rows}
            
        </div>
    );
};

export default Calendar;