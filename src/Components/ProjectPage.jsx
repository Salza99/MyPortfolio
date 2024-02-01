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
    <Row id="progetti" className="competence-text mb-5">
      <Col className=" p-5 " xs={12}>
        <div className="p-3 b-bot">
          <Card.Header>
            <h2 className="text-light fw-bold font-title mb-5">Benvenuto nella Galleria dei Miei Progetti!</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text ref={myElementRef} className="text-white text-shadow interlinea mb-4">
              Sono entusiasta di condividere con te alcuni dei progetti su cui ho lavorato con impegno e passione. Anche
              se la collezione è ancora piccola, ogni progetto rappresenta un pezzo del mio percorso di apprendimento
              come sviluppatore. Spero tu possa trovare interessanti queste piccole opere che hanno contribuito a
              plasmare il mio percorso. Non vedo l'ora di espandere questa galleria nel tempo con nuovi progetti e nuove
              sfide. Nel frattempo, grazie per dare un'occhiata!
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
      <Col className="mb-4" xs={12} lg={4}>
        <a href="https://github.com/Salza99/PropManageHub" target="_blank" rel="noreferrer">
          <Card className="card-overlay">
            <div className="img-position transition"></div>
            <Card.Body className="position-absolute overlay-on-img transition text-light">
              <Card.Title>PropMenageHub</Card.Title>
              <Card.Text>
                PropMenageHub è la mia creazione orgogliosa, un gestionale progettato su misura per ottimizzare le
                operazioni quotidiane di un'agenzia immobiliare. Con un'attenzione particolare all'efficienza e alla
                facilità d'uso, questo sistema è pensato per semplificare la gestione di proprietà e clienti.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col className="mb-4" xs={12} lg={4}>
        <a href="https://github.com/Umberto2698/B-Build-week-2" target="_blank" rel="noreferrer">
          <Card className="card-overlay">
            <div className="img-position transition"></div>
            <Card.Body className="position-absolute overlay-on-img transition text-light">
              <Card.Title>EPIC ENERGY SERVICE</Card.Title>
              <Card.Text>
                Il sistema EPIC ENERGY SERVICE è il risultato di una collaborazione dinamica e sinergica, con il
                coinvolgimento dei miei stimati colleghi di corso.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col className="mb-4" xs={12} lg={4}>
        <a href="https://github.com/alessandrofugazza/bw3" target="_blank" rel="noreferrer">
          <Card className="card-overlay">
            <div className="img-position transition"></div>
            <Card.Body className="position-absolute overlay-on-img transition text-light">
              <Card.Title>Clone di LinkedIn</Card.Title>
              <Card.Text>
                Il nostro progetto clone di LinkedIn, realizzato attraverso la potente combinazione di React, Redux e
                React Persist, è un trionfo di ingegnosità collaborativa che offre un'esperienza utente impeccabile nel
                panorama delle reti professionali.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
    </Row>
  );
};
export default ProjectPage;
