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

const CompetencePage = () => {
  return (
    <Row>
      <Col className="p-5" xs={12}>
        <div className="p-3 b-bot">
          <Card.Header>
            <h2 className="text-light fw-bold">Le mie competenze</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text className="text-white text-shadow mb-4">
              Con competenze in HTML, CSS, JavaScript e l'utilizzo di framework come React per il frontend e Java Spring
              per il backend, sono entusiasta di condividere il mio percorso di sviluppo.
            </Card.Text>
          </Card.Body>
        </div>
        <div className="competence">
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
        </div>
      </Col>
    </Row>
  );
};
export default CompetencePage;
