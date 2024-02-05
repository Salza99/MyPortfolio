import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import FirstTopPage from "./Components/FirstTopPage";
import Topbar from "./Components/Topbar";
import CompetencePage from "./Components/CompetencePage";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import ProjectPage from "./Components/ProjectPage";
import ContactsPage from "./Components/ContactsPage";
import { Moon, Sun } from "react-bootstrap-icons";

function App() {
  const [page, setPage] = useState("HOME");
  const [light, setLight] = useState(true);
  const toggleColor = () => {
    setLight(!light);
    if (light) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  };
  return (
    <div>
      <Topbar page={page} light={light} />

      <Container fluid>
        <Row className="mt-4">
          <Col xs={12} className="text-end position-relative">
            <button
              className={light ? "toggle-button  toggle-dark" : "toggle-button  toggle-light"}
              onClick={() => {
                toggleColor();
              }}
            >
              <div className={light ? "transition me-4 opacity-0" : "transition bg-toggle-light"}>
                {!light && <Sun />}
              </div>
              <div className={light ? "transition bg-toggle-dark" : "transition ms-4 opacity-0 "}>
                {light && <Moon />}
              </div>
            </button>
          </Col>
        </Row>
        <FirstTopPage setPage={setPage} light={light} />
        <CompetencePage setPage={setPage} light={light} />
        <ProjectPage setPage={setPage} light={light} />
        <ContactsPage setPage={setPage} light={light} />
      </Container>
    </div>
  );
}

export default App;
