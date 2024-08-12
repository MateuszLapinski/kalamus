import { Outlet } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import SidePane from './SidePane';
import Button from 'react-bootstrap/Button';
import '../App.css';
import Newmenu from './newmenu'


export function Layout() {
    /*var divStyle = { width: 'calc(100 % -276px)' }*/
    return (
        <div className="app">
            <Row className="topbar">
                <Col className="logoTopBar col-2">
                    <Link to='/' className="d-block">
                        <Image src="kalamus-logo.webp" className="logo"></Image>
                    </Link>
                </Col>
                <Col>
                    <Newmenu/>
                </Col>
            </Row>
            <Row>
                <Col className="sideContainer col-2" >
                    <SidePane />
                </Col>
                <Col className="mainside" >
                    <Row>
                        <Button href= "/"className="backButton">
                            <Image src="arrowLeft.png" className="backImage" ></Image>
                            Back
                            </Button>
                    </Row>
                    <Outlet />
                 </Col>
            </Row>
        </div>
    )
}