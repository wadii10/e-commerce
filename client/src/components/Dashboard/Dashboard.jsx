import React, { useEffect } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getProfil, userLogOut } from '../../redux/actions/actionUser';
import "./Dashboard.css";

const Dashboard = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfil());
    }, [dispatch]);

    return (
        <div className='header'>

            <Navbar bg="light" variant="light" expand={false}>

                <Container fluid >
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Brand href="/">E-Sport</Navbar.Brand>

                    <div className="all_nave">

                        {user ? <div className="nave" >

                            <div className="signUp">
                                <Nav>
                                    <Nav.Link >{user.fullName} </Nav.Link>
                                </Nav>
                            </div>
                            <div className="login">
                                <Nav>
                                    <Nav.Link onClick={() => dispatch(userLogOut())} > Log Out  </Nav.Link>
                                </Nav>
                            </div>
                        </div> : <div className="nave">
                            <div className="signUp">
                                <Nav>
                                    <Nav.Link href='/signUp'>Sign UP  </Nav.Link>
                                </Nav>
                            </div>

                            <div className="login">
                                <Nav>
                                    <Nav.Link href='/login' >Login</Nav.Link>
                                </Nav>
                            </div>

                        </div>}

                        <Nav>
                            <div className='btnCartCount' >
                                <div className='count'>0</div>
                                <i className='fas fa-shopping-cart'></i>
                            </div>
                        </Nav>

                    </div>


                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">E-Sport</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#action2">Men</Nav.Link>
                                <Nav.Link href="#action3">Women</Nav.Link>
                                <Nav.Link href="#action4">Kids</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>

            </Navbar>

        </div >
    )
}

export default Dashboard