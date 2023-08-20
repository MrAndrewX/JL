import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";
import Footer from "./Footer";
import "../css/Landing.css";
import Obra from "../media/obra.jpg";
import Obra2 from "../media/obra2.jpg";

import cleaningImage from "../media/landing-image.png";
import generalCleaningImage from "../media/landing-image.png";

import Card1 from "../media/card1.jpg"; 
import Card2 from "../media/card2.jpg";
import Card3 from "../media/card3.jpg";
import Card4 from "../media/card4.jpg";
import Card5 from "../media/card5.jpg";

export default function LandingPage() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    const timeout = setTimeout(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landing-page">
       <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cleaningImage}
            alt="Limpiezas y mantenimientos"
            style={{ height: `${windowHeight}px` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Obra}
            alt="Desinfección"
            style={{
              height: `${windowHeight}px`,
              objectFit: "cover", // Añade object-fit para asegurar que la imagen cubra el espacio
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Obra2}
            alt="Limpiezas generales"
            style={{
              height: `${windowHeight}px`,
              objectFit: "cover", // Añade object-fit para asegurar que la imagen cubra el espacio
            }}
          />
        </Carousel.Item>
      </Carousel>
      <Container fluid className="content-section">
      <Row>
          <Col md={6} className="contact-info">
            <div className="typing-text">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1500)
                    .typeString('<strong>Contacta</strong> con nosotros.')
                    .pauseFor(300)
                    .deleteChars(22)
                    .typeString('Más de 10 años de <strong><span style="color: #27ae60;">Experiencia.</span></strong>')
                    .deleteChars(31)
                    .typeString('Solicita tu presupuesto <strong><span style="color: red;">sin Compromiso.</span></strong>')
                    .pauseFor(1000)
                    .start();
                }}
              />
            </div>
            <p>
              Ofrecemos todo tipo de servicios de limpieza y mantenimiento para empresas y particulares. Pide tu presupuesto sin compromiso. o tambien puedes contactar con nosotros por telefono! 6XX XX XX XX
            </p>
          </Col>
          <Col md={6} id="sectioncontact">
            <div className="contact-form">
              <h2>Contacto</h2>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label>Teléfono:</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Tu teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="notes">
                  <Form.Label>Notas:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Notas adicionales"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="services-section">
          <Col md={12}>
            <h2>Servicios</h2>
            <div className="services-row">
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={Card1} className="card-image"/>
                  <Card.Body>
                    <Card.Title>Limpieza de mantenimientos</Card.Title>
                    <Card.Text>
                      Servicio de limpieza y mantenimiento para proyectos de construcción y más.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={Card2} className="card-image"/>
                  <Card.Body>
                    <Card.Title>Desinfección</Card.Title>
                    <Card.Text>
                      Servicio de desinfección para asegurar un ambiente limpio y seguro.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={generalCleaningImage} className="card-image"/>
                  <Card.Body>
                    <Card.Title>Pulido</Card.Title>
                    <Card.Text>
                      Pulido de suelos para mantener un espacio impecable.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={Card3} className="card-image"/>
                  <Card.Body>
                    <Card.Title>Control de plagas</Card.Title>
                    <Card.Text>
                      Limpieza completa y profunda para mantener un espacio impecable.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={Card4} className="card-image"/>
                  <Card.Body>
                    <Card.Title>Limpiezas Especiales</Card.Title>
                    <Card.Text>
                      Limpieza completa y profunda para mantener un espacio impecable.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={Card5} className="card-image"/>
                  <Card.Body>
                    <Card.Title>Limpieza De Cristales</Card.Title>
                    <Card.Text>
                      Limpieza completa y profunda para mantener un espacio impecable.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

