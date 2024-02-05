import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CodeSquare } from "react-bootstrap-icons";
import profile from "../assets/profilo.jpg";
const FirstTopPage = ({ setPage, light }) => {
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
    <Row className="mb-5 first-page-anim align-items-center">
      <Col className="p-5" xs={12} lg={6}>
        <div className=" rounded  ">
          <div className="overflow-hidden">
            <h1 ref={myElementRef} className={light ? "text-white mb-5 transition" : "text-dark mb-5 transition"}>
              Full Stack Developer
            </h1>
            <h3 className="mb-2 subtitle-color transition">
              <CodeSquare className="mb-2 me-2" />
              Ciao! Sono Davide Salzani
            </h3>
          </div>
          <Card.Body>
            <Card.Text
              className={
                light
                  ? "text-white text-shadow first-paragraph interlinea transition"
                  : "text-dark text-shadow first-paragraph interlinea transition"
              }
            >
              Benvenuto nel mio mondo digitale! Sono un{" "}
              <span style={{ fontWeight: "bold", color: "lime" }}>Junior Full Stack Web Developer</span> con sede a
              Verona, appassionato di creare soluzioni web innovative. Nel mio portfolio, troverai una selezione di
              progetti significativi che illustrano la mia competenza. Dal design coinvolgente del frontend alla
              gestione efficiente di server e database sul backend, questi progetti sono un assaggio del mio impegno e
              della mia creatività!
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
      <Col xs={12} lg={6}>
        <div className="p-3">
          <div className="rounded border p-5 image-portrait transition">
            <div className="rounded">
              <img className="img-fluid rounded" src={profile} alt="foto-profilo" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default FirstTopPage;
