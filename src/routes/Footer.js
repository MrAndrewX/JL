import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Javer Limpiezas Y Pulidos - Todos los derechos reservados</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Contacto: 6XX XX XX XX</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;