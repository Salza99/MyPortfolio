import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import FirstTopPage from "./Components/FirstTopPage";
import Topbar from "./Components/Topbar";
import CompetencePage from "./Components/CompetencePage";
import { Container } from "react-bootstrap";
import { useState } from "react";
import ProjectPage from "./Components/ProjectPage";

function App() {
  const [page, setPage] = useState("HOME");
  return (
    <div>
      <Topbar page={page} />
      <Container>
        <FirstTopPage setPage={setPage} />
        <CompetencePage setPage={setPage} />
        <ProjectPage setPage={setPage} />
      </Container>
    </div>
  );
}

export default App;
