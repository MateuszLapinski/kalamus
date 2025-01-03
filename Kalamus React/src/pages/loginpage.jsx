import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import '../CSS/loginpage.css';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',


                },
                body: JSON.stringify({ username, password }),
            });

            if (response.status === 200) {
                const data = await response.json();
                try {
                    localStorage.setItem("token", data.token);
                } catch (e) {
                    console.error("Błąd localStorage:", e);
                }
                navigate("/dashboard");
            } else {
                setError("Nieprawidłowy login lub hasło");
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setError("Błąd połączenia z serwerem");
            setIsLoading(false);
        }
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
                                    <Form.Control
                                        className="logininput"
                                        type="text"
                                        placeholder="login"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        className="logininput"
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                {error && <p className="error-text">{error}</p>}
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
