"use client";
import Image from "next/image";
import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="navbar-custom"
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="#" className="text-white fw-bold">
          <Image
            src="../images/logo.svg"
            alt="Logo"
            className="me-2"
            width="150"
            height="30"
          />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="border-0"
        />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="text-white mx-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-3">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-3">
              Gallery
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-3">
              Events
            </Nav.Link>

            {/* Contact Button */}
            <Button variant="outline-light" className="rounded-pill px-4">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
