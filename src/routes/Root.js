import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../media/logo.png";
import "../css/NavbarCustom.css"; // Añade un archivo CSS para tus estilos personalizados

export default function Root() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="custom-navbar fixed-top"
      >
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto"> {/* Cambia "mr-auto" a "ml-auto" */}
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/quienes-somos">
              Quienes Somos
            </Nav.Link>
          
            <Nav.Link as={Link} to="/trabaja-con-nosotros">
              Trabaja con nosotros
            </Nav.Link>
       
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}
