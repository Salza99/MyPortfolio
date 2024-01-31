import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import propManage from "../assets/propManageHub.png";
const ProjectPage = ({ setPage }) => {
  const myElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const element = myElementRef.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setIsVisible(isVisible);
    } else {
      setIsVisible(false);
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
      setPage("PROJECT");
    }
  }, [isVisible]);
  return (
    <Row className="competence-text">
      <Col className=" p-5" xs={12}>
        <div ref={myElementRef} className="p-3">
          <Card.Header>
            <h2 className="text-light fw-bold">Benvenuto nella Galleria dei Miei Progetti!</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text ref={myElementRef} className="text-white text-shadow mb-4">
              Sono entusiasta di condividere con te alcuni dei progetti su cui ho lavorato con impegno e passione. Anche
              se la collezione è ancora piccola, ogni progetto rappresenta un pezzo del mio percorso di apprendimento
              come sviluppatore. Spero tu possa trovare interessanti queste piccole opere che hanno contribuito a
              plasmare il mio percorso. Non vedo l'ora di espandere questa galleria nel tempo con nuovi progetti e nuove
              sfide. Nel frattempo, grazie per dare un'occhiata!
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <Card className="h-100">
          <Card.Img variant="top" src={propManage} alt="Prop-menage-hub-login" />
          <Card.Body>
            <Card.Title>PropMenageHub</Card.Title>
            <Card.Text>
              PropMenageHub è la mia creazione orgogliosa, un gestionale progettato su misura per ottimizzare le
              operazioni quotidiane di un'agenzia immobiliare. Con un'attenzione particolare all'efficienza e alla
              facilità d'uso, questo sistema è pensato per semplificare la gestione di proprietà e clienti.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="h-100">
          <Card.Img variant="top" src={propManage} alt="Prop-menage-hub-login" />
          <Card.Body>
            <Card.Title>EPIC ENERGY SERVICE</Card.Title>
            <Card.Text>
              Il sistema EPIC ENERGY SERVICE è il risultato di una collaborazione dinamica e sinergica, con il
              coinvolgimento di talentuosi sviluppatori, inclusi il sottoscritto e i miei stimati colleghi di corso.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="h-100">
          <Card.Img variant="top" src={propManage} alt="Prop-menage-hub-login" />
          <Card.Body>
            <Card.Title>Clone di LinkedIn</Card.Title>
            <Card.Text>
              Il nostro progetto clone di LinkedIn, realizzato attraverso la potente combinazione di React, Redux e
              React Persist, è un trionfo di ingegnosità collaborativa che offre un'esperienza utente impeccabile nel
              panorama delle reti professionali.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default ProjectPage;
