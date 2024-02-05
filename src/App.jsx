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
  const [lang, setLang] = useState("IT");
  const toggleColor = () => {
    setLight(!light);
    if (light) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  };
  const toggleLenguage = () => {
    const p = document.querySelectorAll("p");
    const h1 = document.querySelector("h1");
    const h2 = document.querySelectorAll("h2");
    const h3 = document.querySelectorAll("h3");
    const h4 = document.querySelectorAll("h4");
    const h5 = document.querySelectorAll("h5");
    const button = document.querySelectorAll("button.transition");
    const sendButton = document.querySelector("button.transition-color");
    sendButton.classList.add("hidden");
    h1.classList.add("hidden");
    button.forEach((el) => {
      el.classList.add("hidden");
    });
    h2.forEach((el) => {
      el.classList.add("hidden");
    });
    h3.forEach((el) => {
      el.classList.add("hidden");
    });
    h4.forEach((el) => {
      el.classList.add("hidden");
    });
    h5.forEach((el) => {
      el.classList.add("hidden");
    });
    p.forEach((element) => {
      element.classList.add("hidden");
    });
    setTimeout(() => {
      h1.classList.remove("hidden");
      sendButton.classList.remove("hidden");
      p.forEach((element) => {
        element.classList.remove("hidden");
      });
      h2.forEach((el) => {
        el.classList.remove("hidden");
      });
      h3.forEach((el) => {
        el.classList.remove("hidden");
      });
      h4.forEach((el) => {
        el.classList.remove("hidden");
      });
      h5.forEach((el) => {
        el.classList.remove("hidden");
      });
      button.forEach((el) => {
        el.classList.remove("hidden");
      });
    }, 300);
    setTimeout(() => {
      if (lang === "IT") {
        setLang("EN");
      } else {
        setLang("IT");
      }
    }, 300);
  };
  return (
    <div>
      <Topbar page={page} lang={lang} />

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
          <Col xs={12} className="text-end position-relative">
            <button
              className={lang === "IT" ? "language-button " : "language-button "}
              onClick={() => {
                toggleLenguage();
              }}
            >
              <div className={lang === "EN" ? "transition " : "transition me-4 opacity-0"}>{lang === "EN" && "EN"}</div>
              <div className={lang === "IT" ? "transition" : "transition ms-4 opacity-0 "}>{lang === "IT" && "IT"}</div>
            </button>
          </Col>
        </Row>
        <FirstTopPage setPage={setPage} light={light} lang={lang} />
        <CompetencePage setPage={setPage} light={light} lang={lang} />
        <ProjectPage setPage={setPage} light={light} lang={lang} />
        <ContactsPage setPage={setPage} light={light} lang={lang} />
      </Container>
    </div>
  );
}

export default App;
