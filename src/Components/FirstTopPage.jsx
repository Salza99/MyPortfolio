import { Card, Col, Container, Row } from "react-bootstrap";
import profilePicture from "../myAssets/profilo.jpg";

const FirstTopPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-5" xs={12} md={9}>
          <div className=" rounded p-3 shadow ">
            <div className="overflow-hidden">
              <h1 className="text-white mb-3">Junior Full-Stack Web Developer</h1>
            </div>
            <Card.Body>
              <Card.Text style={{ height: "1000px" }} className="text-white text-shadow first-paragraph">
                Benvenuto nel mio mondo digitale! Mi chiamo Davide e sono uno Junior Full Stack Web Developer con sede a
                Verona, appassionato di creare soluzioni web innovative. Nel mio portfolio, troverai una selezione di
                progetti significativi che illustrano la mia competenza. Dal design coinvolgente del frontend alla
                gestione efficiente di server e database sul backend, questi progetti sono un assaggio del mio impegno e
                della mia creatività!
              </Card.Text>
            </Card.Body>
          </div>
        </Col>
        <Col className="p-5" xs={12} md={3}>
          <div className="foto-profilo rounded-circle">
            <img style={{ transform: "rotate(-20deg)" }} className="img-fluid" src={profilePicture} alt="my-picture" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default FirstTopPage;
