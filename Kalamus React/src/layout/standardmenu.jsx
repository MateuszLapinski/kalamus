
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import React, { useState } from 'react';
import Modal from '../pages/Modal'

export default function StandardMenu() {
    const [showModal, setShowModal] = useState(false);
    var srcSetting = 'settings.png';
    var srcLogOut = 'logoutRED.png';

    const handleLogout = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <Nav
            className="me-auto my-2 my-lg-0 normalMenu"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <NavDropdown title={<img src={srcSetting} alt="Settings" className="settingImage menuLeft" />}
                id="navbarScrollingDropdown"
            >
                <NavDropdown.Item>
                    <Link to='/' className="d-block">Settings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to='/towary' className="d-block">Report an Error</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="logOut" onClick={handleLogout}>
                    Log out
                    <Image src={srcLogOut} className="logOutImage"></Image>
                </NavDropdown.Item>
            </NavDropdown>
            <Modal show={showModal} handleClose={handleCloseModal} />
        </Nav >

    );

}

