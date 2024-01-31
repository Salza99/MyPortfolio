import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Check2, EnvelopeAt, Github, Linkedin } from "react-bootstrap-icons";

const ContactsPage = ({ setPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  const myElementRef = useRef(null);
  const copyText = () => {
    const textToCopy = document.createElement("textarea");
    textToCopy.value = "Davidesalzani190@gmail.com";
    document.body.appendChild(textToCopy);
    textToCopy.select();

    // Esegui il comando di copia
    document.execCommand("copy");

    // Rimuovi l'elemento temporaneo
    document.body.removeChild(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const handleToolTip = () => {
    setTooltip(true);
  };
  const handleLeave = () => {
    setTooltip(false);
  };
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
      <Col id="contatti" className="p-5 mb-4" xs={12}>
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
                <div className="position-relative">
                  <Card.Text
                    style={{ cursor: "pointer" }}
                    onClick={copyText}
                    onMouseOver={handleToolTip}
                    onMouseLeave={handleLeave}
                  >
                    Davidesalzani190@gmail.com
                  </Card.Text>
                  {tooltip && (
                    <div
                      style={{ position: "absolute", right: "0", backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                      className="border p-2 m-0"
                    >
                      <p style={{ fontSize: "0.8rem" }} className="m-0">
                        {copied ? (
                          <>
                            <Check2 /> <span>Copiato</span>
                          </>
                        ) : (
                          "Copia Email"
                        )}
                      </p>
                    </div>
                  )}
                </div>
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
                <Card.Text>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Salza99"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/Salza99
                  </a>
                </Card.Text>
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
                <Card.Text>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.linkedin.com/in/davide-salzaniwebdeveloper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.linkedin.com/in/davide-salzaniwebdeveloper
                  </a>
                </Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};
export default ContactsPage;
