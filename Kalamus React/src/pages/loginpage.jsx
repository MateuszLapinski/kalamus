<<<<<<< HEAD
import React, {Component, useState} from "react";
=======
import React, { useState } from "react";
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
<<<<<<< HEAD
import '../CSS/loginpage.css';
=======
import '../loginpage.css';
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD

    // signIn(username,password)
    // {
    //     fetch('http://localhost:5173/signin', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             username: username,
    //             password: password,
    //         })
    //     }).then(res => {
    //         if (res.status === 404) {
    //             console.log("User don't exist");
    //             this.setState({showUserError:true});
    //         } else if (response.ok) {
    //             this.setState("User has logged in")
    //         } else {
    //             console.log("wroong")
    //             this.setState({showUserPanel: true, username: username})
    //         }
    //     }).catch(err => {
    //         console.log("Contact with support")
    //     })
    // }
    //
    //
        const handleSubmit = (event) => {
            event.preventDefault();
            setIsLoading(true);
            document.querySelector('.mainlogincontent').classList.add('blurred');
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1000);
        };

=======
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
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2

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
