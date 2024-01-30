import { Card, Col, Container, Row } from "react-bootstrap";
import profilePicture from "../myAssets/profilo.jpg";
import { useEffect, useState } from "react";

const FirstTopPage = () => {
  return (
    <Row>
      <Col className="p-5" xs={12}>
        <div className=" rounded p-3  ">
          <div className="overflow-hidden">
            <h1 className="text-white mb-5">Junior Full-Stack Web Developer</h1>
          </div>
          <Card.Body>
            <Card.Text className="text-white text-shadow first-paragraph">
              Benvenuto nel mio mondo digitale! Mi chiamo Davide e sono un Junior Full Stack Web Developer con sede a
              Verona, appassionato di creare soluzioni web innovative. Nel mio portfolio, troverai una selezione di
              progetti significativi che illustrano la mia competenza. Dal design coinvolgente del frontend alla
              gestione efficiente di server e database sul backend, questi progetti sono un assaggio del mio impegno e
              della mia creatività!
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
    </Row>
  );
};
export default FirstTopPage;
