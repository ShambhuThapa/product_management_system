"use client"
import Image from 'next/image';
import userImg from '@/public/images/icons/user.png';
import logo from '@/public/images/logo/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import DropDownList from './DropDownList';
import { PageRoutes } from '@/constants';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      {['md'].map((expand,index) => (
        <Navbar key={index} expand={expand} className={`position-absolute  w-100`}>
          <Container>
            <Navbar.Brand href={PageRoutes.HOME}>
              <div style={{width:"100px",height:"auto"}}>
               <Image src={logo} alt='logo' priority={true}/>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image src={logo} alt='logo' width={109} height={87} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='d-flex justify-content-around'>
                <Nav className="d-flex justify-content-between gap-lg-2">
                  <Nav.Link href="/shop">Shop
                  <i data-feather="circle"></i>
                  </Nav.Link>
                  <Nav.Link href="/deals">Deals </Nav.Link>
                  <Nav.Link href="/trending">Trending</Nav.Link>
                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;