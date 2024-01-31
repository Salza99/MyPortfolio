import { Card, Col, Row } from "react-bootstrap";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import bootstrapIcon from "../assets/bootstrap-icon.svg";
import sassIcon from "../assets/sass-icon.svg";
import javaIcon from "../assets/java-icon.svg";
import springIcon from "../assets/spring-icon.svg";
import postgresIcon from "../assets/postgreSql-icon.svg";
import mySqlIcon from "../assets/mysql-icon.svg";
import { useEffect, useRef, useState } from "react";

const CompetencePage = ({ setPage }) => {
  const [mediaReduce, setMediaReduce] = useState(false);
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
      setPage("COMPETENCE");
    }
  }, [isVisible]);
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMediaReduce(true);
    } else {
      setMediaReduce(false);
    }
  }, []);

  return (
    <Row>
      <Col className="p-5 competence-text" xs={12}>
        <div className="p-3 b-bot">
          <Card.Header>
            <h2 className="text-light fw-bold">Benvenuto nella Sezione delle Mie Competenze!</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text ref={myElementRef} className="text-white text-shadow mb-4">
              Qui potrai esplorare il mio arsenale di competenze nel mondo dello sviluppo web. Da linguaggi di markup e
              stilizzazione come HTML e CSS a potenti framework come React per il frontend e Java Spring per il backend,
              ho investito tempo ed energia per padroneggiare le tecnologie chiave del settore. La mia esperienza spazia
              dall'implementazione di interfacce utente responsive alla gestione di database complessi. Sono
              appassionato di creare soluzioni efficienti e scalabili utilizzando le ultime tecnologie e metodologie di
              sviluppo.
            </Card.Text>
          </Card.Body>
        </div>
        <div className="d-flex justify-content-center">
          <div className="scroller" data-animated={mediaReduce}>
            <div className="scroller-inner">
              <div className="text-center">
                <img src={htmlIcon} alt="Html-logo" />
                <p className="text-light">HTML5</p>
              </div>
              <div className="text-center">
                <img src={cssIcon} alt="Css-logo" />
                <p className="text-light">CSS3</p>
              </div>
              <div className="text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                  alt="Javascript-logo"
                />
                <p className="text-light">JAVASCRIPT</p>
              </div>
              <div className="text-center">
                <img src={bootstrapIcon} alt="Bootstrap-logo" /> <p className="text-light">BOOTSTRAP</p>{" "}
              </div>
              <div className="text-center">
                <img src={sassIcon} alt="Sass-logo" /> <p className="text-light">SASS/SCSS</p>{" "}
              </div>
              <div className="text-center">
                <img src={reactIcon} alt="React-logo" /> <p className="text-light">REACT</p>{" "}
              </div>
              <div className="text-center">
                <img src={javaIcon} alt="Java-logo" /> <p className="text-light">JAVA</p>{" "}
              </div>
              <div className="text-center">
                <img src={springIcon} alt="Spring-logo" /> <p className="text-light">SPRINGBOOT</p>{" "}
              </div>
              <div className="text-center">
                <img src={postgresIcon} alt="PostgreSQL-logo" /> <p className="text-light">POSTGRESQL</p>{" "}
              </div>
              <div className="text-center">
                <img src={mySqlIcon} alt="MySQL-logo" /> <p className="text-light">MYSQL</p>{" "}
              </div>
              {mediaReduce && (
                <>
                  <div className="text-center">
                    <img src={htmlIcon} alt="Html-logo" />
                    <p className="text-light">HTML5</p>
                  </div>
                  <div className="text-center">
                    <img src={cssIcon} alt="Css-logo" />
                    <p className="text-light">CSS3</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                      alt="Javascript-logo"
                    />
                    <p className="text-light">JAVASCRIPT</p>
                  </div>
                  <div className="text-center">
                    <img src={bootstrapIcon} alt="Bootstrap-logo" /> <p className="text-light">BOOTSTRAP</p>{" "}
                  </div>
                  <div className="text-center">
                    <img src={sassIcon} alt="Sass-logo" /> <p className="text-light">SASS/SCSS</p>{" "}
                  </div>
                  <div className="text-center">
                    <img src={reactIcon} alt="React-logo" /> <p className="text-light">REACT</p>{" "}
                  </div>
                  <div className="text-center">
                    <img src={javaIcon} alt="Java-logo" /> <p className="text-light">JAVA</p>{" "}
                  </div>
                  <div className="text-center">
                    <img src={springIcon} alt="Spring-logo" /> <p className="text-light">SPRINGBOOT</p>{" "}
                  </div>
                  <div className="text-center">
                    <img src={postgresIcon} alt="PostgreSQL-logo" /> <p className="text-light">POSTGRESQL</p>{" "}
                  </div>
                  <div className="text-center">
                    <img src={mySqlIcon} alt="MySQL-logo" /> <p className="text-light">MYSQL</p>{" "}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default CompetencePage;
