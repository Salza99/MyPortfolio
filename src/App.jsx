import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import FirstTopPage from "./Components/FirstTopPage";
import Topbar from "./Components/Topbar";
import CompetencePage from "./Components/CompetencePage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Topbar />
      <Container>
        <FirstTopPage />
        <CompetencePage />
      </Container>
    </div>
  );
}

export default App;
