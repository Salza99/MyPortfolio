import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import FirstTopPage from "./Components/FirstTopPage";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <FirstTopPage />
    </div>
  );
}

export default App;
