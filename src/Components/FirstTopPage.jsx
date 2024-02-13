import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CodeSquare } from "react-bootstrap-icons";
import profile from "../assets/profilo.jpg";
const FirstTopPage = ({ setPage, light, lang }) => {
  const myElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [traductionObj, setTraductionObj] = useState({
    titoloIT: "Full Stack Developer",
    sottotitoloIT: "Ciao! Sono Davide Salzani",
    textIT:
      "Benvenuto nel mio mondo digitale! Sono un / con sede a Verona, con la passione per la creazione di soluzioni web innovative. Nel mio portfolio, troverai una selezione di progetti significativi che illustrano la mia competenza. Dal design coinvolgente del frontend alla gestione efficiente di server e database sul backend, questi progetti sono un assaggio del mio impegno e della mia creatività!",
    titoloEN: "Full Stack Developer",
    sottotitoloEN: "Hi! I'm Davide Salzani",
    textEN:
      "Welcome to my digital world! I am a / based in Verona, passionate about creating innovative web solutions. In my portfolio, you will find a selection of significant projects that illustrate my expertise. From the immersive design of the frontend to the efficient management of servers and databases on the backend, these projects are a taste of my commitment and creativity!",
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
      setPage("HOME");
    }
  }, [isVisible]);
  return (
    <Row className="mb-5 first-page-anim align-items-center">
      <Col className="p-5" xs={12} lg={6}>
        <div className=" rounded  ">
          <div className="overflow-hidden">
            <h1 ref={myElementRef} className={light ? "text-white mb-5 transition" : "text-dark mb-5 transition"}>
              {lang === "IT" ? traductionObj.titoloIT : traductionObj.titoloEN}
            </h1>
            <h3 className="mb-2 subtitle-color transition">
              <CodeSquare className="mb-2 me-2" />
              {lang === "IT" ? traductionObj.sottotitoloIT : traductionObj.sottotitoloEN}
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
              {lang === "IT" ? traductionObj.textIT.split("/")[0] : traductionObj.textEN.split("/")[0]}
              <span style={{ fontWeight: "bold", color: "lime" }}>Junior Full Stack Web Developer</span>{" "}
              {lang === "IT" ? traductionObj.textIT.split("/")[1] : traductionObj.textEN.split("/")[1]}
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
