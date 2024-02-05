import { useEffect, useRef, useState } from "react";
import { Card, Col, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { Check2, EnvelopeAt, Github, Linkedin } from "react-bootstrap-icons";
import emailjs from "emailjs-com";

const ContactsPage = ({ setPage, light, lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [traductionObj, setTraductionObj] = useState({
    titoloIT: "Contattami: Parliamo del Futuro",
    sottotitoloIT: "Scrivimi qui",
    textIT:
      "Benvenuto nella mia area contatti, un luogo dedicato alle connessioni e alle opportunità. Se hai domande, progetti da discutere o semplicemente desideri scambiare idee, sono qui per te. Troviamoci nel mondo digitale o organizziamo una chiacchierata informale.",
    labelFormNomeIT: "Nome",
    bottoneIT: "Invia",
    emailPlaceholderIT: "Inserisci email",
    nomePlaceholderIT: "Inserisci il tuo nome",
    tooltipPassiveIT: "Copia Email",
    tooltipActiveIT: "Copiato",
    labelFormNomeEN: "Name",
    emailPlaceholderEN: "enter email",
    nomePlaceholderEN: "enter your name",
    tooltipPassiveEN: "Copy Email",
    tooltipActiveEN: "Copied",
    titoloEN: "Contact me: Talk about the Future",
    bottoneEN: "Send",
    sottotitoloEN: "Write me!",
    textEN:
      "Welcome to my contact area, a place dedicated to connections and opportunities. If you have questions, projects to discuss or just want to exchange ideas, I’m here for you. Let’s meet in the digital world or organize an informal chat.",
  });
  const myElementRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    const templateParams = {
      from_email: email,
      user_email: email,
      from_name: name,
      to_name: "Davide",
      message: content,
    };

    emailjs.send("service_ggva0ng", "template_xlzy4mh", templateParams, "tcoLAcEPuSQiZ3so0").then(
      (response) => {
        setIsPending(false);
        alert("Email inviata con successo!");
        console.log("SUCCESS!", response.status, response.text);
        setEmail("");
        setContent("");
        setName("");
      },
      (error) => {
        setIsPending(false);
        console.error("Errore durante l'invio dell'email:", error);
        alert("Si è verificato un errore durante l'invio dell'email.");
        setEmail("");
        setContent("");
        setName("");
      }
    );
  };
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
    <Row
      className={
        light ? "competence-text mb-5 justify-content-center text-light" : "competence-text mb-5 justify-content-center"
      }
    >
      <Col id="contatti" className="p-5 mb-4" xs={12}>
        <div className="p-3 b-bot">
          <Card.Header>
            <h2 className="transition fw-bold font-title mb-5">
              {lang === "IT" ? traductionObj.titoloIT : traductionObj.titoloEN}
            </h2>
          </Card.Header>
          <Card.Body>
            <Card.Text ref={myElementRef} className="transition text-shadow mb-4 interlinea">
              {lang === "IT" ? traductionObj.textIT : traductionObj.textEN}
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
      <Col className="mb-4 p-5" xs={12}>
        <Form className="mb-5  p-3" onSubmit={handleSubmit} id="form-to-send">
          <h3 className="mb-3 fw-bold transition">
            {lang === "IT" ? traductionObj.sottotitoloIT : traductionObj.sottotitoloEN}
          </h3>
          <Form.Group className="mb-2">
            <Form.Label className="transition">Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder={lang === "IT" ? traductionObj.emailPlaceholderIT : traductionObj.emailPlaceholderEN}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label className="transition">
              {lang === "IT" ? traductionObj.labelFormNomeIT : traductionObj.labelFormNomeEN}
            </Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder={lang === "IT" ? traductionObj.nomePlaceholderIT : traductionObj.nomePlaceholderEN}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <FloatingLabel
            className="mb-4 text-dark transition"
            label={lang === "IT" ? traductionObj.sottotitoloIT : traductionObj.sottotitoloEN}
          >
            <Form.Control
              as="textarea"
              value={content}
              placeholder={lang === "IT" ? traductionObj.sottotitoloIT : traductionObj.sottotitoloEN}
              style={{ height: "100px" }}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </FloatingLabel>

          <div className="d-flex justify-content-center">
            <button
              className={
                content === "" || email === "" || name === ""
                  ? "button-disabled d-flex align-items-center justify-content-center transition-color"
                  : "form-button d-flex align-items-center justify-content-center transition-color"
              }
              type="submit"
              disabled={content === "" || email === "" || name === "" || isPending}
            >
              {isPending && <Spinner className="me-2" variant="success" />}
              {lang === "IT" ? traductionObj.bottoneIT : traductionObj.bottoneEN}
            </button>
          </div>
        </Form>
      </Col>
      <Row className="text-center">
        <Col className="mb-4" xs={12} md={6} lg={4}>
          <Card style={{ border: "none", backgroundColor: "transparent", marginBottom: "5rem" }}>
            <Row className={light && "text-light"}>
              <Col className="transition" xs={2}>
                <EnvelopeAt style={{ fontSize: "2.5rem" }} />
              </Col>
              <Col xs={10}>
                <h5 className="transition">Email</h5>
                <div className="position-relative">
                  <p
                    className="transition"
                    style={{ cursor: "pointer" }}
                    onClick={copyText}
                    onMouseOver={handleToolTip}
                    onMouseLeave={handleLeave}
                  >
                    Davidesalzani190@gmail.com
                  </p>
                  {tooltip && (
                    <div
                      style={{ position: "absolute", right: "0", backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                      className="border p-2 m-0"
                    >
                      <p style={{ fontSize: "0.8rem" }} className="m-0">
                        {copied ? (
                          <>
                            <Check2 />{" "}
                            <span>{lang === "IT" ? traductionObj.tooltipActiveIT : traductionObj.tooltipActiveEN}</span>
                          </>
                        ) : (
                          <span>{lang === "IT" ? traductionObj.tooltipPassiveIT : traductionObj.tooltipPassiveEN}</span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="mb-4" xs={12} md={6} lg={4}>
          <Card style={{ border: "none", backgroundColor: "transparent", marginBottom: "5rem" }}>
            <Row className={light && "text-light"}>
              <Col className="transition" xs={2}>
                <Github style={{ fontSize: "2.5rem" }} />
              </Col>
              <Col className="transition" xs={10}>
                <h5 className="transition">Github</h5>
                <Card.Text className="transition">
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
        <Col className="mb-4" xs={12} lg={4}>
          <Card style={{ border: "none", backgroundColor: "transparent", marginBottom: "5rem" }}>
            <Row className={light && "text-light"}>
              <Col className="transition" xs={2}>
                <Linkedin style={{ fontSize: "2.5rem" }} />
              </Col>
              <Col className="transition" xs={10}>
                <h5 className="transition">Linkedin</h5>
                <Card.Text className="transition">
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
