import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
const ProjectPage = ({ setPage, light, lang }) => {
  const myElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [traductionObj, setTraductionObj] = useState({
    titoloIT: "Benvenuto nella Galleria dei Miei Progetti!",
    bottoneIT: "Vedi su Github",
    textIT:
      "Sono entusiasta di condividere con te alcuni dei progetti su cui ho lavorato con impegno e passione. Anche se la collezione è ancora piccola, ogni progetto rappresenta un pezzo del mio percorso di apprendimento come sviluppatore. Spero tu possa trovare interessanti queste piccole opere che hanno contribuito a plasmare il mio percorso. Non vedo l'ora di espandere questa galleria nel tempo con nuovi progetti e nuove sfide. Nel frattempo, grazie per dare un'occhiata!",
    textPropManageHubIT:
      "PropMenageHub è la mia creazione orgogliosa, un gestionale progettato su misura per ottimizzare le operazioni quotidiane di un'agenzia immobiliare. Con un'attenzione particolare all'efficienza e alla facilità d'uso, questo sistema è pensato per semplificare la gestione di proprietà e clienti.",
    textEpicEnergyServiceIT:
      "Il sistema EPIC ENERGY SERVICE è il risultato di una collaborazione dinamica e sinergica, con il coinvolgimento dei miei stimati colleghi di corso.",
    textCloneDiLinkedinIT:
      "Il nostro progetto clone di LinkedIn, realizzato attraverso la potente combinazione di React, Redux e React Persist, è un trionfo di ingegnosità collaborativa che offre un'esperienza utente impeccabile nel panorama delle reti professionali.",
    titoloCloneIT: "Clone di LinkedIn",
    titoloCloneEN: "LinkedIn Clone",
    textPropManageHubEN:
      "PropMenageHub is my proud creation, a ERP designed to optimize the daily operations of a real estate agency. With a focus on efficiency and ease of use, this system is designed to simplify property and customer management.",
    textEpicEnergyServiceEN:
      "The EPIC ENERGY SERVICE system is the result of a dynamic and synergistic collaboration, with the involvement of my esteemed colleagues.",
    textCloneDiLinkedinEN:
      "Our LinkedIn clone project, built through the powerful combination of React, Redux and React Persist, is a triumph of collaborative ingenuity that delivers a flawless user experience across the professional network landscape.",
    titoloEN: "Welcome to My Projects Gallery!",
    bottoneEN: "See on Github",
    textEN:
      "I’m excited to share with you some of the projects I’ve worked on with commitment and passion. Although the collection is still small, each project represents a piece of my learning path as a developer. I hope you find interesting these small works that helped shape my path. I look forward to expanding this gallery over time with new projects and new challenges. In the meantime, thanks for taking a look!",
  });
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
    <Row id="progetti" className={light ? "competence-text mb-5 text-light" : " competence-text mb-5"}>
      <Col className=" p-5 " xs={12}>
        <div className="p-3 b-bot">
          <Card.Header>
            <h2 className=" fw-bold font-title mb-5 transition">
              {lang === "IT" ? traductionObj.titoloIT : traductionObj.titoloEN}
            </h2>
          </Card.Header>
          <Card.Body>
            <Card.Text ref={myElementRef} className="transition text-shadow interlinea mb-4">
              {lang === "IT" ? traductionObj.textIT : traductionObj.textEN}
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
      <Col className="mb-4" xs={12} lg={4}>
        <Card className={light ? "card-overlay text-light" : "card-overlay"}>
          <div className="img-background-prop img-position transition"></div>
          <Card.Body className="position-absolute overlay-on-img transition ">
            <Card.Title>PropMenageHub</Card.Title>
            <Card.Text>
              {lang === "IT" ? traductionObj.textPropManageHubIT : traductionObj.textPropManageHubEN}
            </Card.Text>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Salza99/PropManageHub"
              target="_blank"
              rel="noreferrer"
            >
              <div className="d-flex justify-content-center align-items-center border p-1">
                <Card.Title style={{ fontSize: "1rem" }} className="m-0">
                  {" "}
                  <Github style={{ marginBottom: "1px" }} fontSize={"1rem"} />{" "}
                  {lang === "IT" ? traductionObj.bottoneIT : traductionObj.bottoneEN}
                </Card.Title>
              </div>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-4" xs={12} lg={4}>
        <Card className={light ? "card-overlay text-light" : "card-overlay"}>
          <div className="img-background-epic img-position transition"></div>
          <Card.Body className="position-absolute overlay-on-img transition ">
            <Card.Title>EPIC ENERGY SERVICE</Card.Title>
            <Card.Text>
              {lang === "IT" ? traductionObj.textEpicEnergyServiceIT : traductionObj.textEpicEnergyServiceEN}
            </Card.Text>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Umberto2698/B-Build-week-2"
              target="_blank"
              rel="noreferrer"
            >
              <div className="d-flex justify-content-center align-items-center border p-1">
                <Card.Title style={{ fontSize: "1rem" }} className="m-0">
                  {" "}
                  <Github style={{ marginBottom: "1px" }} fontSize={"1rem"} />{" "}
                  {lang === "IT" ? traductionObj.bottoneIT : traductionObj.bottoneEN}
                </Card.Title>
              </div>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-4" xs={12} lg={4}>
        <Card className={light ? "card-overlay text-light" : "card-overlay"}>
          <div className="img-background-linkedin img-position transition"></div>
          <Card.Body className="position-absolute overlay-on-img transition ">
            <Card.Title>{lang === "IT" ? traductionObj.titoloCloneIT : traductionObj.titoloCloneEN}</Card.Title>
            <Card.Text>
              {lang === "IT" ? traductionObj.textCloneDiLinkedinIT : traductionObj.textCloneDiLinkedinEN}
            </Card.Text>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/alessandrofugazza/bw3"
              target="_blank"
              rel="noreferrer"
            >
              <div className="d-flex justify-content-center align-items-center border p-1">
                <Card.Title style={{ fontSize: "1rem" }} className="m-0">
                  {" "}
                  <Github style={{ marginBottom: "1px" }} fontSize={"1rem"} />{" "}
                  {lang === "IT" ? traductionObj.bottoneIT : traductionObj.bottoneEN}
                </Card.Title>
              </div>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default ProjectPage;
