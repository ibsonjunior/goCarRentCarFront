import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import Logo from '../../assets/logo_gocar.png'

function MainHeader() {
    
    const location = useLocation()
    const [path, setPath] = useState(location.pathname)

    useEffect(() => {
    setPath(location.pathname)

    }, [location.pathname])
    
    return (
        <>
            <header>
                <Navbar>
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to="/">
                                <img
                                    src={Logo}
                                    width="100"
                                    height="30"
                                    className="align-top ml-4"
                                    alt="LOGO"
                                />
                            </Link>
                        </Navbar.Brand>
                    </Container>

                    <ButtonGroup className='md-4' style={{ width: "70vw", display: "flex" }}>
                        <Link to="/login" >
                            {path !== "/login" ? <Button className='me-3 rounded' variant='outline-success' style={{ width: "19vw"}}> Login </Button> : ''}
                        </Link>
                        <Link to="/signup">
                            {path !== "/signup" ? <Button className='me-3 rounded' variant='outline-primary' style={{ width: "19vw"}}> Cadastre-se </Button> : ''}
                        </Link>
                    </ButtonGroup>
                </Navbar>
            </header>
        </>
    )
}

export default MainHeader