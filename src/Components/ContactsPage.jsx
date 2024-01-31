import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { EnvelopeAt, Github, Linkedin } from "react-bootstrap-icons";

const ContactsPage = ({ setPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const myElementRef = useRef(null);
  const handleScroll = () => {
    const element = myElementRef.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setIsVisible(isVisible);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isVisible) {
      setPage("CONTACT");
    }
  }, [isVisible]);
  return (
    <Row className="competence-text">
      <Col className="p-5 mb-4" xs={12}>
        <div className="p-3 b-bot">
          <Card.Header>
            <h2 className="text-light fw-bold font-title mb-5">Contattami: Parliamo del Futuro</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text ref={myElementRef} className="text-white text-shadow mb-4 interlinea">
              Benvenuto nella mia area contatti, un luogo dedicato alle connessioni e alle opportunità. Se hai domande,
              progetti da discutere o semplicemente desideri scambiare idee, sono qui per te. Troviamoci nel mondo
              digitale o organizziamo una chiacchierata informale.
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
      <Row className="text-center">
        <Col className="mb-4" xs={12} md={4}>
          <Card style={{ border: "none", backgroundColor: "transparent", marginBottom: "5rem" }}>
            <Row>
              <Col className="text-light" xs={2}>
                <EnvelopeAt style={{ fontSize: "3rem" }} />
              </Col>
              <Col className="text-light" xs={10}>
                <Card.Title>Email</Card.Title>
                <Card.Text>Davidesalzani190@gmail.com</Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="mb-4" xs={12} md={4}>
          <Card style={{ border: "none", backgroundColor: "transparent", marginBottom: "5rem" }}>
            <Row>
              <Col className="text-light" xs={2}>
                <Github style={{ fontSize: "3rem" }} />
              </Col>
              <Col className="text-light" xs={10}>
                <Card.Title>Github</Card.Title>
                <Card.Text>https://github.com/Salza99</Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="mb-4" xs={12} md={4}>
          <Card style={{ border: "none", backgroundColor: "transparent", marginBottom: "5rem" }}>
            <Row>
              <Col className="text-light" xs={2}>
                <Linkedin style={{ fontSize: "3rem" }} />
              </Col>
              <Col className="text-light" xs={10}>
                <Card.Title>Linkedin</Card.Title>
                <Card.Text>www.linkedin.com/in/davide-salzaniwebdeveloper</Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};
export default ContactsPage;
