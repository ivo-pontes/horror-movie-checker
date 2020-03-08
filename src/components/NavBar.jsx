import React from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/NavBar.css';


function NavBar() {
  return (
          <>
            <h1 className="text-center ">Horror Movie Checker</h1>
            <Nav className="justify-content-center" activeKey="/">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="link-2">Movies</Nav.Link>
            </Nav.Item>
            </Nav>
          </>);
}

export default NavBar;
