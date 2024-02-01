import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const FirstTopPage = ({ setPage }) => {
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
      setPage("HOME");
    }
  }, [isVisible]);
  return (
    <Row className="mb-5">
      <Col className="p-5" xs={12}>
        <div className=" rounded p-3 first-page-anim ">
          <div className="overflow-hidden">
            <h1 ref={myElementRef} className="text-white mb-5">
              Junior Full-Stack Web Developer
            </h1>
          </div>
          <Card.Body>
            <Card.Text className="text-white text-shadow first-paragraph interlinea">
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
