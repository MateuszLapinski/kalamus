import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import '../loginpage.css';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Zapobiega domyślnemu działaniu formularza
        setIsLoading(true);

        // Dodanie klasy rozmycia tylko do outerloginwrapper
        document.querySelector('.mainlogincontent').classList.add('blurred');

        // Przekierowanie po 3 sekundach
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 1000);
    };

    return (
        <>
            {isLoading && (
                <div className="loading-screen">
                    Ładowanie...
                </div>
            )}
            <div className={'mainlogincontent'}>
            <Container className="outerloginwrapper">
                <Container className="loginWrapper">
                    <Image src="dark-calamar-logo.webp" className="loginpagelogo"></Image>
                    <span className="signintext">Sign in</span>
                    <div className="inputswrapper">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className="logininput" type="login" placeholder="login" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control className="logininput" type="password" placeholder="password" rows={3} />
                            </Form.Group>
                            <Button className='loginbutton' type="submit">Sign in</Button>
                        </Form>
                    </div>
                    <span className="forgotText">Forgot Password?</span>
                </Container>
            </Container>
            </div>
        </>
    );
}
